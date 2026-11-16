// User data stays separate from the versioned asset cache. Keep the existing keys.
let persistenceRequest = null;
let reportedStorageReadFailure = false;
let recipeFontWarmPromise = Promise.resolve();

async function cacheLoadedRecipeFonts() {
  const worker = navigator.serviceWorker?.controller;
  if (!worker) return false;
  const urls = [...new Set(performance.getEntriesByType('resource').map(entry=>entry.name).filter(name=>new URL(name).pathname.includes('/assets/fonts/') && new URL(name).pathname.endsWith('.woff2')))];
  if (!urls.length) return true;
  return new Promise(resolve=>{
    const channel = new MessageChannel();
    const timer = setTimeout(()=>{channel.port1.close();resolve(false)},5000);
    channel.port1.onmessage = event=>{clearTimeout(timer);channel.port1.close();resolve(event.data?.ok===true)};
    worker.postMessage({type:'CACHE_RECIPE_FONTS',urls},[channel.port2]);
  });
}

function warmRecipeFonts(data) {
  if (!document.fonts) return;
  const text = [...new Set(data.flatMap(item=>['name','ingredients','types','method','convenience'].map(key=>String(item[key]||''))).join(''))].join('');
  if (!text) return;
  recipeFontWarmPromise = Promise.all([
    document.fonts.load('500 16px "Suan Sans"',text),
    document.fonts.load('800 16px "Suan Sans"',text)
  ]).then(()=>cacheLoadedRecipeFonts()).catch(()=>false);
}

function requestPersistentData() {
  if (!navigator.storage?.persist || persistenceRequest) return;
  persistenceRequest = (async () => {
    if (navigator.storage.persisted && await navigator.storage.persisted()) return true;
    return navigator.storage.persist();
  })().catch(() => false);
}

function readBrowserValue(key) {
  try { return localStorage.getItem(key); }
  catch (error) {
    if (!reportedStorageReadFailure) {
      reportedStorageReadFailure = true;
      setTimeout(() => showToast('⚠️ 当前浏览器无法读取本地数据，请用下载模板保留菜谱备份。', 'error'), 0);
    }
    return null;
  }
}

function writeBrowserValue(key, data, requestPersistence = true) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
    if (requestPersistence) requestPersistentData();
    return true;
  } catch (error) {
    showToast('⚠️ 没有保存成功：浏览器存储不可用或空间不足，请先下载菜谱备份。', 'error');
    return false;
  }
}

function saveRecipeData(data, requestPersistence = true) {
  if (!writeBrowserValue('garlic_recipes', data, requestPersistence)) return false;
  warmRecipeFonts(data);
  return true;
}

function saveCartData(data) {
  return writeBrowserValue('garlic_cart', data);
}

let workbookParserPromise = null;
function loadWorkbookParser() {
  if (window.XLSX) return Promise.resolve(window.XLSX);
  if (!workbookParserPromise) {
    workbookParserPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = new URL('assets/vendor/xlsx.full.min.js', document.baseURI).href;
      script.onload = () => window.XLSX ? resolve(window.XLSX) : reject(new Error('Workbook parser unavailable'));
      script.onerror = () => { script.remove(); reject(new Error('Workbook parser could not load')); };
      document.head.append(script);
    }).catch(error => { workbookParserPromise = null; throw error; });
  }
  return workbookParserPromise;
}
