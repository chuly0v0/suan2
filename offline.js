// Register after rendering; version changes never clear user recipes or cart data.
(() => {
  if (!('serviceWorker' in navigator) || !['https:', 'http:'].includes(location.protocol)) return;
  let registration;
  let reloadRequested = false;
  let notice;
  let updateButton;
  let updateLabel;
  let hadController = !!navigator.serviceWorker.controller;

  function showUpdate(worker) {
    if (notice) {
      if (updateLabel) updateLabel.textContent = '有新版可用';
      if (updateButton) { updateButton.disabled = false; updateButton.textContent = '更新页面'; }
      return;
    }
    notice = document.createElement('div');
    notice.className = 'site-update-notice';
    notice.setAttribute('role', 'status');
    const label = document.createElement('span'); label.textContent = '有新版可用';
    const button = document.createElement('button'); button.type = 'button'; button.textContent = '更新页面';
    updateButton = button; updateLabel = label;
    button.onclick = () => {
      button.disabled = true; button.textContent = '正在更新';
      // Leave the current document before activation so its pending requests or
      // stale worker references cannot hold the update open.
      location.assign(new URL('update.html?apply=1', document.baseURI));
    };
    notice.append(label, button); document.body.append(notice);
  }

  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (reloadRequested) location.reload();
    else {
      recipeFontWarmPromise.then(()=>cacheLoadedRecipeFonts());
      if (hadController) {
        showUpdate(null);
        if (updateLabel) updateLabel.textContent = '有新版可用';
        if (updateButton) { updateButton.disabled = false; updateButton.textContent = '更新页面'; }
      }
      hadController = true;
    }
  });
  navigator.serviceWorker.addEventListener('message', event => {
    if (event.data?.type !== 'UPDATE_HAS_OTHER_TABS') return;
    reloadRequested = false;
    if (updateLabel) updateLabel.textContent = '有新版可用';
    if (updateButton) {updateButton.disabled = false;updateButton.textContent = '更新页面';}
  });

  async function register() {
    try {
      registration = await navigator.serviceWorker.register(new URL('sw.js', document.baseURI), {updateViaCache:'none'});
      if (registration.waiting) showUpdate(registration.waiting);
      registration.addEventListener('updatefound', () => {
        const worker = registration.installing;
        worker?.addEventListener('statechange', () => {
          if (worker.state === 'installed' && navigator.serviceWorker.controller) showUpdate(worker);
        });
      });
      // The browser's small worker check is the only normal revisit request.
      registration.update().catch(() => {});
    } catch (error) {
      // File previews, unsupported browsers or failed downloads still run normally.
      console.info('Offline cache unavailable for this visit.');
    }
  }

  const schedule = () => {
    if ('requestIdleCallback' in window) requestIdleCallback(register, {timeout:1500});
    else setTimeout(register, 0);
  };
  if (document.readyState === 'complete') schedule();
  else window.addEventListener('load', schedule, {once:true});
})();
