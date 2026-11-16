// Existing recipe operations retained from the online snapshot.

      // Canonical six-column recipes, migrated from the original 33 rows.
      const defaultRecipes = [
  {
    "name": "菠萝炒吊龙",
    "ingredients": "吊龙、菠萝",
    "types": [
      "牛羊",
      "蔬菜"
    ],
    "method": "炒",
    "appetizing": true,
    "convenience": "2"
  },
  {
    "name": "香菜炒吊龙",
    "ingredients": "吊龙、香菜",
    "types": [
      "牛羊",
      "蔬菜"
    ],
    "method": "炒",
    "appetizing": true,
    "convenience": "2"
  },
  {
    "name": "蒜心炒吊龙",
    "ingredients": "吊龙、蒜心",
    "types": [
      "牛羊",
      "蔬菜"
    ],
    "method": "炒",
    "appetizing": false,
    "convenience": "2"
  },
  {
    "name": "虫草花蒸吊龙",
    "ingredients": "吊龙、虫草花",
    "types": [
      "牛羊",
      "蔬菜"
    ],
    "method": "蒸",
    "appetizing": false,
    "convenience": "1"
  },
  {
    "name": "藠头炒鸡胸肉",
    "ingredients": "鸡胸肉、藠头",
    "types": [
      "禽类"
    ],
    "method": "炒",
    "appetizing": true,
    "convenience": "2"
  },
  {
    "name": "小米辣炒鸡胸肉",
    "ingredients": "鸡胸肉、小米辣",
    "types": [
      "禽类",
      "蔬菜"
    ],
    "method": "炒",
    "appetizing": true,
    "convenience": "2"
  },
  {
    "name": "胡萝卜炒鸡胸肉",
    "ingredients": "鸡胸肉、胡萝卜",
    "types": [
      "禽类",
      "蔬菜"
    ],
    "method": "炒",
    "appetizing": false,
    "convenience": "2"
  },
  {
    "name": "奥尔良煎鸡胸肉",
    "ingredients": "鸡胸肉、奥尔良",
    "types": [
      "禽类"
    ],
    "method": "煎",
    "appetizing": false,
    "convenience": "3"
  },
  {
    "name": "炒豆苗",
    "ingredients": "豆苗",
    "types": [
      "蔬菜"
    ],
    "method": "炒",
    "appetizing": false,
    "convenience": "1"
  },
  {
    "name": "上汤豆苗",
    "ingredients": "豆苗",
    "types": [
      "蔬菜"
    ],
    "method": "上汤",
    "appetizing": false,
    "convenience": "2"
  },
  {
    "name": "五花肉炒菜心干",
    "ingredients": "菜心干、五花肉",
    "types": [
      "猪",
      "蔬菜",
      "干货"
    ],
    "method": "炒",
    "appetizing": true,
    "convenience": "2"
  },
  {
    "name": "酸梅酱炖鸭翅",
    "ingredients": "鸭翅、酸梅酱",
    "types": [
      "禽类"
    ],
    "method": "炖",
    "appetizing": true,
    "convenience": "3"
  },
  {
    "name": "菠萝炒鸭",
    "ingredients": "鸭、菠萝",
    "types": [
      "禽类",
      "蔬菜"
    ],
    "method": "炒",
    "appetizing": true,
    "convenience": "3"
  },
  {
    "name": "藠头炒鸭",
    "ingredients": "鸭、藠头",
    "types": [
      "禽类"
    ],
    "method": "炒",
    "appetizing": true,
    "convenience": "3"
  },
  {
    "name": "胡萝卜炖排骨",
    "ingredients": "排骨、胡萝卜",
    "types": [
      "猪",
      "蔬菜"
    ],
    "method": "炖",
    "appetizing": false,
    "convenience": "3"
  },
  {
    "name": "洋葱煎排骨",
    "ingredients": "排骨、洋葱",
    "types": [
      "猪",
      "蔬菜"
    ],
    "method": "煎",
    "appetizing": false,
    "convenience": "3"
  },
  {
    "name": "蒸鸡",
    "ingredients": "鸡",
    "types": [
      "禽类"
    ],
    "method": "蒸",
    "appetizing": false,
    "convenience": "2"
  },
  {
    "name": "虫草花蒸鸡",
    "ingredients": "鸡、虫草花",
    "types": [
      "禽类",
      "蔬菜"
    ],
    "method": "蒸",
    "appetizing": false,
    "convenience": "2"
  },
  {
    "name": "五花肉炒荞苗",
    "ingredients": "荞苗、五花肉",
    "types": [
      "猪",
      "蔬菜"
    ],
    "method": "炒",
    "appetizing": true,
    "convenience": "2"
  },
  {
    "name": "荞苗炒五花肉",
    "ingredients": "五花肉、荞苗",
    "types": [
      "猪",
      "蔬菜"
    ],
    "method": "炒",
    "appetizing": true,
    "convenience": "2"
  },
  {
    "name": "甜醋炖猪手",
    "ingredients": "猪手、甜醋",
    "types": [
      "猪"
    ],
    "method": "炖",
    "appetizing": false,
    "convenience": "3"
  },
  {
    "name": "蒸鸡蛋",
    "ingredients": "鸡蛋",
    "types": [
      "蛋豆"
    ],
    "method": "蒸",
    "appetizing": false,
    "convenience": "1"
  },
  {
    "name": "银鱼蒸鸡蛋",
    "ingredients": "鸡蛋、银鱼",
    "types": [
      "水产",
      "蛋豆"
    ],
    "method": "蒸",
    "appetizing": false,
    "convenience": "1"
  },
  {
    "name": "洋葱焗鸡腿",
    "ingredients": "鸡腿、洋葱",
    "types": [
      "禽类",
      "蔬菜"
    ],
    "method": "焗",
    "appetizing": false,
    "convenience": "2"
  },
  {
    "name": "白灼虾",
    "ingredients": "虾",
    "types": [
      "水产"
    ],
    "method": "白灼",
    "appetizing": false,
    "convenience": "1"
  },
  {
    "name": "蒸鲫鱼",
    "ingredients": "鲫鱼",
    "types": [
      "水产"
    ],
    "method": "蒸",
    "appetizing": false,
    "convenience": "1"
  },
  {
    "name": "炒鱿鱼",
    "ingredients": "鱿鱼",
    "types": [
      "水产"
    ],
    "method": "炒",
    "appetizing": false,
    "convenience": "2"
  },
  {
    "name": "白灼鱿鱼",
    "ingredients": "鱿鱼",
    "types": [
      "水产"
    ],
    "method": "白灼",
    "appetizing": false,
    "convenience": "1"
  },
  {
    "name": "蒸鱼干",
    "ingredients": "鱼干",
    "types": [
      "水产",
      "干货"
    ],
    "method": "蒸",
    "appetizing": true,
    "convenience": "1"
  },
  {
    "name": "炒花甲",
    "ingredients": "花甲",
    "types": [
      "水产"
    ],
    "method": "炒",
    "appetizing": true,
    "convenience": "2"
  },
  {
    "name": "番茄炒蛋",
    "ingredients": "蛋、番茄",
    "types": [
      "蛋豆",
      "蔬菜"
    ],
    "method": "炒",
    "appetizing": true,
    "convenience": "1"
  },
  {
    "name": "辣椒煎虾滑",
    "ingredients": "虾滑、辣椒",
    "types": [
      "水产",
      "蔬菜"
    ],
    "method": "煎",
    "appetizing": true,
    "convenience": "2"
  },
  {
    "name": "辣椒煎鱼滑",
    "ingredients": "鱼滑、辣椒",
    "types": [
      "水产",
      "蔬菜"
    ],
    "method": "煎",
    "appetizing": true,
    "convenience": "2"
  }
];

      // Application states
      let recipes = [];
      let activeCategory = null; // No ingredient selected means all ingredients.
      let activeDimension = '烹饪方式'; // "烹饪方式", "方便程度", "开胃菜", "快手菜"
      let activeSubTag = null; // Selected tag on Left Sidebar (e.g. "炒" or "3星")
      let hasUnreadCartItems = false;
      let currentRecommendedDish = null;
      let isEditMode = false;
      let recipePageTurn = null;
      const cartFeedbackTimers = new WeakMap();
      let recipeExportInProgress = false;

      // Toggle edit mode
      function toggleEditMode() {
        isEditMode = !isEditMode;
        const btn = document.getElementById('edit-mode-btn');
        if (isEditMode) {
          btn.innerHTML = '完成编辑 ' + handIconMarkup('check');
          btn.classList.remove('bg-amber-100', 'text-amber-800');
          btn.classList.add('bg-red-500', 'text-white');
          showToast("已进入菜品编辑模式，点击红 × 可删除菜品", "info");
        } else {
          btn.innerHTML = '编辑菜品 ' + handIconMarkup('pencil');
          btn.classList.add('bg-amber-100', 'text-amber-800');
          btn.classList.remove('bg-red-500', 'text-white');
        }
        renderApp();
      }

      // Add Dish Modal Controls
      function openAddDishModal() {
        // Exit edit mode if active to prevent UI confusion
        if (isEditMode) {
          toggleEditMode();
        }
        
        const modal = document.getElementById('add-dish-modal');
        const form = document.getElementById('add-dish-form');
        form.reset();
        modal.classList.remove('hidden');
        
        // Custom scale-in animation
        const box = modal.querySelector('div');
        void box.offsetWidth;
        box.classList.remove('scale-95', 'opacity-0');
      }

      function closeAddDishModal() {
        const modal = document.getElementById('add-dish-modal');
        const box = modal.querySelector('div');
        box.classList.add('scale-95', 'opacity-0');
        setTimeout(() => {
          modal.classList.add('hidden');
        }, 150);
      }

      function saveNewDish(event) {
        event.preventDefault();
        const name = document.getElementById('dish-name').value.trim();
        const ingredients = document.getElementById('dish-ingredients').value.trim();
        const types = [...document.querySelectorAll('#add-dish-form input[name="dish-types"]:checked')].map(input=>input.value);
        const method = document.getElementById('dish-method').value;
        const convenience = document.getElementById('dish-convenience').value;
        const appetizing = document.getElementById('dish-appetizing').value === '是';
        if (!types.length) { showToast('请选择至少一个食材分类。', 'error'); return; }

        if (!name) {
          showToast("⚠️ 菜名不能为空！", "error");
          return;
        }

        if (name.startsWith('=')) {
          showToast("⚠️ 菜名不能以等号(=)开头（不支持Excel公式格式）！", "error");
          return;
        }

        const isDuplicate = recipes.some(r => r.name.toLowerCase() === name.toLowerCase());
        if (isDuplicate) {
          showToast("⚠️ 菜谱中已存在同名菜品！", "error");
          return;
        }

        const newDish = {name, ingredients, types, method, convenience, appetizing};

        const nextRecipes = [...recipes, newDish];
        if (!saveRecipeData(nextRecipes)) return;
        recipes = nextRecipes;
        closeAddDishModal();
        
        showToast("新菜品添加成功！", "success");
        renderApp();
      }

      // Export the complete current recipe collection, independent of active filters.
      async function exportRecipesToExcel(button = document.getElementById('export-recipes-btn'), allowEmpty = false) {
        if (recipeExportInProgress || button.disabled) return;
        if (!recipes.length && !allowEmpty) {
          showToast('当前没有可导出的菜谱。', 'info');
          return;
        }
        const headers = recipeSchema.headers;
        const rows = recipes.map(recipeSchema.row);
        const exportButtons = [...document.querySelectorAll('[data-recipe-export]')];
        const originalLabel = button.innerHTML;
        recipeExportInProgress = true;
        exportButtons.forEach(item => {
          item.disabled = true;
          item.setAttribute('aria-busy', 'true');
        });
        button.textContent = '正在导出…';
        try {
          const workbookLibrary = await loadWorkbookParser();
          const sheet = workbookLibrary.utils.aoa_to_sheet([headers, ...rows]);
          sheet['!cols'] = [28, 38, 26, 16, 12, 16].map(wch => ({wch}));
          sheet['!autofilter'] = {ref: sheet['!ref']};
          const workbook = workbookLibrary.utils.book_new();
          workbookLibrary.utils.book_append_sheet(workbook, sheet, '当前菜谱');
          const principles = workbookLibrary.utils.aoa_to_sheet([['分类原则','填写说明'], ...recipeSchema.rules]);
          principles['!cols'] = [{wch:20},{wch:100}];
          workbookLibrary.utils.book_append_sheet(workbook, principles, '分类原则');
          const now = new Date();
          const date = [now.getFullYear(), String(now.getMonth() + 1).padStart(2, '0'), String(now.getDate()).padStart(2, '0')].join('-');
          const filename = `蒜了菜谱-${date}.xlsx`;
          const mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
          const bytes = workbookLibrary.write(workbook, {bookType: 'xlsx', type: 'array', compression: true});
          // Some Android download managers sniff a generic binary Blob as ZIP.
          // Supply the Excel MIME type and filename on both the File and the link.
          const file = new File([bytes], filename, {type: mimeType});
          const url = URL.createObjectURL(file);
          const link = document.createElement('a');
          link.href = url;
          link.download = filename;
          link.type = mimeType;
          link.hidden = true;
          try {
            document.body.appendChild(link);
            link.click();
          } finally {
            link.remove();
            // Leave time for the mobile download manager to consume the URL.
            setTimeout(() => URL.revokeObjectURL(url), 60000);
          }
        } catch (error) {
          console.error(error);
          showToast('导出 Excel 失败，请重试；首次使用请先联网。', 'error');
        } finally {
          exportButtons.forEach(item => {
            item.disabled = false;
            item.removeAttribute('aria-busy');
          });
          button.innerHTML = originalLabel;
          recipeExportInProgress = false;
        }
      }

      // Confirm deletion of a dish from recipes list
      function confirmDeleteDish(recipeName) {
        showConfirm(`确定要删除“${recipeName}”这道菜吗？`, "🗑️", () => {
          const nextRecipes = recipes.filter(r => r.name !== recipeName);
          if (!saveRecipeData(nextRecipes)) return;
          recipes = nextRecipes;
          showToast(`已成功删除 ${recipeName}！`, "success");
          
          // Re-roll recommendation if the recommended dish was deleted
          if (currentRecommendedDish && currentRecommendedDish.name === recipeName) {
            shakeRecommendation();
          }
          
          renderApp();
        });
      }

      // Swipe switching for categories
      let touchStartX = 0;
      let touchStartY = 0;
      const categoriesOrder = recipeSchema.groups;

      function setupSwipeGestures() {
        const appScreen = document.getElementById('app-screen');
        if (!appScreen) return;

        appScreen.addEventListener('touchstart', (e) => {
          touchStartX = e.changedTouches[0].screenX;
          touchStartY = e.changedTouches[0].screenY;
        }, { passive: true });

        appScreen.addEventListener('touchend', (e) => {
          const touchEndX = e.changedTouches[0].screenX;
          const touchEndY = e.changedTouches[0].screenY;
          handleSwipe(touchStartX, touchStartY, touchEndX, touchEndY);
        }, { passive: true });
      }

      function handleSwipe(startX, startY, endX, endY) {
        const diffX = endX - startX;
        const diffY = endY - startY;

        // Ensure it is primarily a horizontal swipe and exceeds threshold (50px)
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
          const currentIndex = categoriesOrder.indexOf(activeCategory);
          if (currentIndex !== -1) {
            let nextIndex = currentIndex;
            if (diffX < 0) {
              // Left swipe: next category
              nextIndex = currentIndex + 1;
              if (nextIndex >= categoriesOrder.length) {
                nextIndex = 0; // Wrap around
              }
            } else {
              // Right swipe: previous category
              nextIndex = currentIndex - 1;
              if (nextIndex < 0) {
                nextIndex = categoriesOrder.length - 1; // Wrap around
              }
            }
            selectCategory(categoriesOrder[nextIndex]);
          }
        }
      }

      // Initialize Database on load
      window.onload = function() {
        initDatabase();
        shakeRecommendation();
        setupSwipeGestures();
        renderApp();
      };

      // Load database from localStorage or default
      function initDatabase() {
        const stored = readBrowserValue('garlic_recipes');
        if (stored) {
          try {
            const parsed = JSON.parse(stored);
            if (Array.isArray(parsed)) {
              recipes = parsed.filter(r => r && r.name && typeof r.name === 'string' && !r.name.trim().startsWith('=')).map(recipeSchema.normalize);
              if (JSON.stringify(recipes) !== JSON.stringify(parsed)) {
                const backupKey = 'garlic_recipes_schema1_backup';
                const backedUp = readBrowserValue(backupKey) !== null || writeBrowserValue(backupKey, parsed, false);
                if (backedUp) saveRecipeData(recipes, false);
              }
            } else {
              recipes = [...defaultRecipes];
              showToast('⚠️ 已保存的菜谱格式异常，原数据未被覆盖，请从备份重新导入。', 'error');
            }
          } catch(e) {
            recipes = [...defaultRecipes];
            showToast('⚠️ 无法读取已保存的菜谱，原数据未被覆盖，请从备份重新导入。', 'error');
          }
        } else {
          recipes = [...defaultRecipes];
          saveRecipeData(recipes, false);
        }
        warmRecipeFonts(recipes);
      }

      // Restore to Default Recipes
      function restoreDefaults() {
        const nextRecipes = [...defaultRecipes];
        if (!saveRecipeData(nextRecipes)) return;
        recipes = nextRecipes;
        showToast("已恢复默认33道菜谱！", "success");
        shakeRecommendation();
        renderApp();
      }

      // Update Database via file uploader
      function triggerFileSelect() {
        document.getElementById('file-uploader').click();
      }

      async function handleFileUpload(event) {
        const file = event.target.files[0];
        if (!file) return;
        event.target.value = '';

        const fileName = file.name.toLowerCase();
        
        if (fileName.endsWith('.xlsx')) {
          try { await loadWorkbookParser(); }
          catch (error) {
            showToast('⚠️ 暂时无法读取 Excel，请联网后重试；也可以先上传 CSV。', 'error');
            return;
          }
          const reader = new FileReader();
          reader.onload = function(e) {
            try {
              const data = new Uint8Array(e.target.result);
              const workbook = XLSX.read(data, { type: 'array' });
              const firstSheetName = workbook.SheetNames[0];
              const worksheet = workbook.Sheets[firstSheetName];
              
              const rawJson = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
              if (rawJson.length < 2) {
                showToast("⚠️ 表格数据为空或格式不正确！", "error");
                return;
              }

              parseAndSaveImportedData(rawJson);
            } catch (err) {
              console.error(err);
              showToast("❌ 解析 Excel 失败！", "error");
            }
          };
          reader.readAsArrayBuffer(file);
        } else if (fileName.endsWith('.csv')) {
          const reader = new FileReader();
          reader.onload = function(e) {
            try {
              const text = e.target.result;
              const lines = text.split(/\r?\n/);
              if (lines.length < 2) {
                showToast("⚠️ CSV 数据为空！", "error");
                return;
              }

              const rawJson = lines.map(line => parseCSVLine(line));
              parseAndSaveImportedData(rawJson);
            } catch (err) {
              console.error(err);
              showToast("❌ 解析 CSV 失败！", "error");
            }
          };
          reader.readAsText(file, 'utf-8');
        } else {
          showToast("⚠️ 只支持 .xlsx 或 .csv 文件！", "error");
        }
        // reset uploader value
        event.target.value = "";
      }

      // Simple CSV parser supporting double quotes
      function parseCSVLine(text) {
        const result = [];
        let inQuotes = false;
        let token = "";
        for (let i = 0; i < text.length; i++) {
          const c = text[i];
          if (c === '"') {
            inQuotes = !inQuotes;
          } else if (c === ',' && !inQuotes) {
            result.push(token);
            token = "";
          } else {
            token += c;
          }
        }
        result.push(token);
        return result;
      }

      // Map headers and save parsed rows
      function parseAndSaveImportedData(rawRows) {
        const headers = rawRows[0]?.map(h=>String(h || '').trim()) || [];
        const modern = headers.includes('食材分类') || headers.includes('食材分类（可多选）');
        const mapping = modern
          ? {'菜名':'name','食材':'ingredients','食材分类':'types','食材分类（可多选）':'types','烹饪方式':'method','开胃':'appetizing','方便程度':'convenience'}
          : {'菜名':'name','食材':'ingredients','类别':'category','种类':'type','烹饪方式':'method','难易程度':'difficulty','方便程度':'difficulty','口味':'flavor','配料':'garnish'};
        const required = modern ? recipeSchema.headers.filter(h=>h!=='食材分类') : ['菜名','食材','种类','烹饪方式'];
        if (!required.every(h=>headers.includes(h))) { showToast('表头不完整，请使用下载的模板填写。', 'error'); return; }
        const imported = [], names = new Set();
        for (let i=1; i<rawRows.length; i++) {
          const values = rawRows[i];
          if (!values || values.every(v=>v===null || v===undefined || String(v).trim()==='')) continue;
          const source = {};
          headers.forEach((h,j)=>{if(mapping[h])source[mapping[h]]=String(values[j] ?? '').trim();});
          if (!modern && source.name?.startsWith('=')) source.name = [source.garnish,source.method,source.ingredients].filter(Boolean).join('');
          const fail = reason=>showToast('第'+(i+1)+'行：'+reason+'，本次未替换原菜谱。','error');
          if (!source.name || source.name.startsWith('=')) { fail('请填写实际菜名'); return; }
          if (names.has(source.name.toLowerCase())) { fail('菜名重复，请先确认是否为同一道菜'); return; }
          if (modern) {
            const groups = recipeSchema.groupNames(source.types);
            if (!groups.length || groups.some(g=>!recipeSchema.groups.includes(g))) { fail('食材分类需使用模板中的分类'); return; }
            if (!recipeSchema.methods.includes(source.method) && source.method!=='其他') { fail('烹饪方式不在模板选项内'); return; }
            if (!['是','否','true','false','1','0'].includes(source.appetizing)) { fail('开胃请填是或否'); return; }
            if (!['1','2','3'].includes(source.convenience)) { fail('方便程度请填1、2或3'); return; }
            source.types = groups;
          }
          const recipe = recipeSchema.normalize(source);
          imported.push(recipe); names.add(recipe.name.toLowerCase());
        }
        if (!imported.length) { showToast('表格没有有效菜品，原菜谱未改变。','error'); return; }
        if (!saveRecipeData(imported)) return;
        recipes = imported;
        showToast('成功导入 '+imported.length+' 条菜谱！','success');
        shakeRecommendation(); renderApp();
      }


      // --- RANDOM RECOMMENDATION CORE (SCREEN 1) ---
      function shakeRecommendation() {
        if (recipes.length === 0) return;
        
        const textEl = document.getElementById('recommend-dish-name');
        const ingEl = document.getElementById('recommend-ingredients');
        
        // Simple playful "roulette spinning" look
        let count = 0;
        const interval = setInterval(() => {
          const tempDish = recipes[Math.floor(Math.random() * recipes.length)];
          textEl.innerText = tempDish.name;
          ingEl.innerText = `主要食材：${tempDish.ingredients || '无'}`;
          count++;
          if (count > 6) {
            clearInterval(interval);
            // Final select
            const finalDish = recipes[Math.floor(Math.random() * recipes.length)];
            currentRecommendedDish = finalDish;
            textEl.innerText = finalDish.name;
            ingEl.innerText = `主要食材：${finalDish.ingredients || '无'}`;
            
            // Add a little bouncy scale animation to text
            textEl.classList.remove('scale-95');
            textEl.classList.add('scale-105', 'transition-transform');
            setTimeout(() => textEl.classList.remove('scale-105'), 150);
          }
        }, 60);
      }

      function addRecommendedToCart() {
        if (currentRecommendedDish) {
          addToCart(currentRecommendedDish.name);
        } else {
          showToast("💡 还没有加载好菜品，请稍等哦！", "error");
        }
      }


      // --- SCREEN TRANSITIONS ---
      function transitionToApp() {
        const pot = document.getElementById('home-pot-container');
        const homeScreen = document.getElementById('home-screen');
        const appScreen = document.getElementById('app-screen');
        
        pot.classList.add('transition-all', 'duration-600', 'scale-[2.5]', 'opacity-0');
        homeScreen.classList.add('transition-all', 'duration-600', 'opacity-0');
        
        setTimeout(() => {
          homeScreen.classList.add('hidden');
          appScreen.classList.remove('hidden');
          
          pot.classList.remove('scale-[2.5]', 'opacity-0');
          homeScreen.classList.remove('opacity-0');
          activeCategory = null;
          activeDimension = '烹饪方式';
          activeSubTag = null;
          renderApp();
          document.getElementById('recipe-list-container').scrollTop = 0;
          document.getElementById('left-sidebar-tags').scrollTop = 0;
        }, 600);
      }

      function backToHome() {
        const homeScreen = document.getElementById('home-screen');
        const appScreen = document.getElementById('app-screen');
        
        appScreen.classList.add('transition-all', 'duration-450', 'opacity-0');
        
        setTimeout(() => {
          appScreen.classList.add('hidden');
          appScreen.classList.remove('opacity-0');
          homeScreen.classList.remove('hidden');
          
          shakeRecommendation();
        }, 450);
      }

      function selectCategory(category) {
        activeCategory = activeCategory === category ? null : category;
        renderApp();
        
        const activeBtn = document.querySelector(`.category-btn[data-category="${category}"]`);
        if (activeBtn) {
          activeBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
      }

      function selectDimension(dimension) {
        if (activeDimension === dimension) {
          activeDimension = null;
          activeSubTag = null;
        } else {
          activeDimension = dimension;
          activeSubTag = null;
        }
        renderApp();
      }

      function selectSubTag(tag) {
        if (activeSubTag === tag) {
          activeSubTag = null;
        } else {
          activeSubTag = tag;
        }
        renderApp();
      }

      function scrollToTop() {
        const el = document.getElementById('recipe-list-container');
        if (el) {
          el.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      }


      // --- RENDER APP LAYOUTS & FILTERS ---

      function renderApp() {
        recipePageTurn?.beforeRender();
        recipes = recipes.filter(r => r && r.name && typeof r.name === 'string' && !r.name.trim().startsWith('=')).map(recipeSchema.normalize);
        document.querySelectorAll('.category-btn').forEach(btn => {
          const selected = btn.dataset.category === activeCategory;
          btn.classList.toggle('active', selected);
          btn.setAttribute('aria-pressed', String(selected));
          btn.querySelector('.nav-check-container').classList.toggle('hidden', !selected);
        });
        const leftSidebar = document.getElementById('left-sidebar-tags');
        let tags = [];
        if (activeDimension === '烹饪方式') {
          tags = [['炒','🔥'],['蒸','💧'],['煎','🍳'],['焗','🥘'],['炖','🍲'],['白灼','🥗'],['上汤','🥣'],['其它','🧄']].map(([text,emoji]) => ({text,emoji,value:text}));
        } else if (activeDimension === '方便程度') {
          tags = [3,2,1].map(n => ({text:n+'星',value:String(n),emoji:'☆'.repeat(n)}));
        }
        // Reuse the same buttons within a dimension so their height can animate,
        // focus stays on the pressed button, and rapid clicks reverse smoothly.
        const tagLayout = tags.length ? activeDimension : '';
        if (leftSidebar.dataset.tagLayout !== tagLayout) {
          leftSidebar.replaceChildren();
          leftSidebar.dataset.tagLayout = tagLayout;
          for (const tag of tags) {
            const btn = document.createElement('button');
            btn.className = 'tag-btn';
            btn.dataset.tagValue = tag.value;
            btn.setAttribute('aria-label', tag.text);
            btn.onclick = () => selectSubTag(tag.value);
            btn.innerHTML = '<span class="tag-emoji" aria-hidden="true">' + (activeDimension === '方便程度' ? handStarMarkup(Number(tag.value)) : handIconMarkup(handIconKey(tag.emoji))) + '</span><span class="tag-label" aria-hidden="true">' + tag.text + '</span>';
            leftSidebar.append(btn);
          }
        }
        for (const btn of leftSidebar.children) {
          const tag = tags.find(item => item.value === btn.dataset.tagValue);
          if (!tag) continue;
          const selected = activeSubTag === tag.value;
          btn.classList.toggle('bg-[#d6ccb7]', selected);
          btn.setAttribute('aria-pressed', String(selected));
        }
        // With no sub-filter dimension, leave the icon rail empty.
        const dimensions = {'烹饪方式':'dim-method','方便程度':'dim-difficulty','开胃菜':'dim-appetizer','快手菜':'dim-quick'};
        for (const [dimension,id] of Object.entries(dimensions)) {
          const btn = document.getElementById(id);
          const selected = activeDimension === dimension;
          btn.classList.toggle('bg-[#b5cad9]', selected);
          btn.setAttribute('aria-pressed', String(selected));
        }
        let filtered = activeCategory ? recipes.filter(recipe => recipe.types.includes(activeCategory)) : [...recipes];
        const categoryLabel = activeCategory || '全部食材';
        let indicatorText = '种类：' + categoryLabel;
        if (activeDimension === '烹饪方式') {
          if (activeSubTag) filtered = filtered.filter(r => r.method === activeSubTag);
          indicatorText = categoryLabel + ' ＋ ' + (activeSubTag || '全部烹饪');
        } else if (activeDimension === '方便程度') {
          if (activeSubTag) filtered = filtered.filter(r => r.convenience === activeSubTag);
          indicatorText = categoryLabel + ' ＋ ' + (activeSubTag ? '方便:' + activeSubTag + '星' : '全部方便程度');
        } else if (activeDimension === '开胃菜') {
          filtered = filtered.filter(r => r.appetizing);
          indicatorText = categoryLabel + ' ＋ 开胃菜';
        } else if (activeDimension === '快手菜') {
          filtered = filtered.filter(r => r.convenience === '1');
          indicatorText = categoryLabel + ' ＋ 快手菜';
        }
        document.getElementById('active-filter-indicator').innerText = indicatorText;
        document.getElementById('filtered-count').innerText = filtered.length + ' 条';
        const list = document.getElementById('recipe-list-container');
        const pageContent = document.createElement('div');
        pageContent.className = 'recipe-page-content';
        list.replaceChildren(pageContent);
        if (!filtered.length) {
          pageContent.innerHTML = '<div class="empty-state"><div class="empty-icon">' + handIconMarkup('frying-pan') + '</div><p>这里还没有菜品</p><p>换个分类或筛选试试</p><button class="paint-button small" onclick="restoreDefaults()">恢复默认33道</button></div>';
        }
        for (const recipe of filtered) {
          const row = document.createElement('article');
          row.className = 'recipe-row';
          row.dataset.recipeName = recipe.name;
          const name = document.createElement('h2');
          name.className = 'dish-name';
          name.textContent = recipe.name;
          const copy = document.createElement('div');
          copy.className = 'dish-copy';
          copy.append(name);
          const meta = document.createElement('div');
          meta.className = 'dish-meta';
          for (const text of [recipe.ingredients,recipe.method,recipe.appetizing ? '开胃' : '']) {
            if (!text) continue;
            const span = document.createElement('span'); span.textContent = text; meta.append(span);
          }
          const stars = document.createElement('span'); stars.className = 'dish-stars';
          const difficulty = parseInt(recipe.convenience) || 0;
          stars.innerHTML = handStarMarkup(difficulty);
          stars.setAttribute('role', 'img');
          stars.setAttribute('aria-label', difficulty ? '方便程度' + difficulty + '星，星越少越方便' : '方便程度未标注'); meta.append(stars);
          copy.append(meta);
          const detail = document.createElement('p'); detail.className = 'dish-detail';
          detail.textContent = recipe.types.join(' / '); copy.append(detail);
          const btn = document.createElement('button');
          btn.className = isEditMode ? 'delete-btn' : 'add-btn';
          btn.textContent = isEditMode ? '×' : '＋';
          btn.setAttribute('aria-label', (isEditMode ? '删除菜品：' : '加入砂锅：') + recipe.name);
          btn.onclick = e => {e.stopPropagation(); isEditMode ? confirmDeleteDish(recipe.name) : addToCart(recipe.name);};
          if (!isEditMode) row.onclick = () => addToCart(recipe.name);
          row.append(copy, btn); pageContent.append(row);
        }
        renderCartUI();
        recipePageTurn?.afterRender();
      }


      function getCart() {
        const stored = readBrowserValue('garlic_cart');
        if (!stored) return [];
        try {
          const parsed = JSON.parse(stored);
          return Array.isArray(parsed) ? parsed.filter(item => typeof item === 'string') : [];
        } catch (error) { return []; }
      }

      function saveCart(cart) {
        if (!saveCartData(cart)) return false;
        renderCartUI();
        return true;
      }

      function addToCart(dishName) {
        const cart = getCart();
        if (cart.includes(dishName)) {
          showToast(`🍲 “${dishName}” 已经在砂锅里啦！`);
          return;
        }
        
        cart.push(dishName);
        if (!saveCart(cart)) return;
        
        // Trigger unread cart stars state
        hasUnreadCartItems = true;
        document.getElementById('cart-star').classList.remove('hidden');
        playCartAddFeedback(dishName);
        
        showToast(`🎉 成功添加 “${dishName}”！`, "success");
      }

      function replayCartFeedback(element, className, duration) {
        if (!element) return;
        clearTimeout(cartFeedbackTimers.get(element));
        if (element.classList.contains(className)) {
          element.classList.remove(className);
          void element.offsetWidth;
        }
        element.classList.add(className);
        cartFeedbackTimers.set(element, setTimeout(() => {
          element.classList.remove(className);
          cartFeedbackTimers.delete(element);
        }, duration));
      }

      function playCartAddFeedback(dishName) {
        const row = [...document.querySelectorAll('.recipe-row')].find(item => item.dataset.recipeName === dishName);
        replayCartFeedback(row, 'recipe-added', 450);
        const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (reduceMotion) return;
        replayCartFeedback(row?.querySelector('.add-btn'), 'recipe-add-pressed', 250);
        replayCartFeedback(document.getElementById('cart-badge'), 'cart-count-added', 300);
        // Haptics are supplementary: unsupported or blocked vibration never affects saving.
        if (matchMedia('(any-pointer: coarse)').matches && typeof navigator.vibrate === 'function') {
          try { navigator.vibrate(15); } catch {}
        }
      }

      function removeFromCart(dishName) {
        let cart = getCart();
        cart = cart.filter(item => item !== dishName);
        if (!saveCart(cart)) return;
        showToast(`🗑️ 已从砂锅取出 “${dishName}”`);
      }

      function clearCart() {
        showConfirm("确定要清空砂锅里的所有菜谱吗？", "🗑️", () => {
          if (!saveCart([])) return;
          showToast("🍲 砂锅已清空！");
          document.getElementById('cart-popup').classList.add('hidden');
        });
      }

      function toggleCart() {
        const popup = document.getElementById('cart-popup');
        const isHidden = popup.classList.contains('hidden');
        
        if (isHidden) {
          popup.classList.remove('hidden');
          // Hide unread star because cart is now viewed
          hasUnreadCartItems = false;
          document.getElementById('cart-star').classList.add('hidden');
        } else {
          popup.classList.add('hidden');
        }
      }

      // Render items list inside Speech Bubble
      function renderCartUI() {
        const cart = getCart();
        const badge = document.getElementById('cart-badge');
        
        if (cart.length > 0) {
          badge.innerText = cart.length;
          badge.classList.remove('hidden');
        } else {
          badge.classList.add('hidden');
        }

        const listContainer = document.getElementById('cart-items-list');
        listContainer.innerHTML = '';

        if (cart.length === 0) {
          listContainer.innerHTML = `
            <div class="cart-empty"><div>砂锅里空空的</div><small>去菜谱里挑几道喜欢的吧</small></div>
          `;
          return;
        }

        cart.forEach(dish => {
          const itemDiv = document.createElement('div');
          itemDiv.className = "recipe-cart-item";

          const dishText = document.createElement('span');
          dishText.textContent = dish;
          const remove = document.createElement('button');
          remove.className = 'cart-remove'; remove.textContent = '×';
          remove.setAttribute('aria-label', '从砂锅移除：' + dish);
          remove.onclick = e => {e.stopPropagation(); triggerDishDelete(dish);};
          remove.onmousedown = e => e.stopPropagation();
          remove.ontouchstart = e => e.stopPropagation();
          itemDiv.append(dishText, remove);

          // Add mobile & desktop long-press support
          let pressTimer;
          const startPress = () => {
            pressTimer = setTimeout(() => {
              triggerDishDelete(dish);
            }, 600);
            itemDiv.classList.add('bg-red-50', 'scale-[0.98]');
          };
          const endPress = () => {
            clearTimeout(pressTimer);
            itemDiv.classList.remove('bg-red-50', 'scale-[0.98]');
          };

          itemDiv.addEventListener('mousedown', startPress);
          itemDiv.addEventListener('mouseup', endPress);
          itemDiv.addEventListener('mouseleave', endPress);
          
          itemDiv.addEventListener('touchstart', startPress, { passive: true });
          itemDiv.addEventListener('touchend', endPress);
          itemDiv.addEventListener('touchcancel', endPress);

          listContainer.appendChild(itemDiv);
        });
      }

      function triggerDishDelete(dish) {
        showConfirm(`确定要从砂锅中删除 “${dish}” 吗？`, "🗑️", () => {
          removeFromCart(dish);
        });
      }

      // --- CUSTOM CUTE CONFIRM MODAL SYSTEM ---
      function showConfirm(text, emoji, onConfirm) {
        const modal = document.getElementById('confirm-modal');
        const box = document.getElementById('confirm-box');
        document.getElementById('confirm-text').innerText = text;
        document.getElementById('confirm-emoji').replaceChildren(makeHandIcon(handIconKey(emoji)));
        
        const okBtn = document.getElementById('confirm-ok-btn');
        const cancelBtn = document.getElementById('confirm-cancel-btn');
        
        const closeModal = () => {
          box.classList.add('scale-95', 'opacity-0');
          setTimeout(() => {
            modal.classList.add('hidden');
          }, 150);
        };
        
        const handleOk = (e) => {
          if (e) {
            e.preventDefault();
            e.stopPropagation();
          }
          onConfirm();
          closeModal();
        };
        
        const handleCancel = (e) => {
          if (e) {
            e.preventDefault();
            e.stopPropagation();
          }
          closeModal();
        };
        
        okBtn.onclick = handleOk;
        okBtn.ontouchstart = handleOk;
        
        cancelBtn.onclick = handleCancel;
        cancelBtn.ontouchstart = handleCancel;
        
        modal.classList.remove('hidden');
        // Force reflow
        void box.offsetWidth;
        box.classList.remove('scale-95', 'opacity-0');
      }


      // --- GLOBAL TOAST SYSTEM ---
      function showToast(message, type = "success") {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        
        const presentation = splitHandIconMessage(message, type);
        
        toast.className = `toast opacity-0`;
        const toastIcon = makeHandIcon(presentation.key);
        const toastText = document.createElement('span'); toastText.textContent = presentation.text;
        toast.append(toastIcon, toastText);
        
        container.appendChild(toast);
        
        // Stagger entrance
        setTimeout(() => {
          toast.classList.remove('translate-y-8', 'opacity-0');
        }, 15);
        
        // Remove after duration
        setTimeout(() => {
          toast.classList.add('translate-y-[-8px]', 'opacity-0');
          setTimeout(() => {
            toast.remove();
          }, 300);
        }, 2200);
      }
    

const categoryIcons = ['chicken','pig','cow','fish','egg-beans','cabbage','mushroom'];
document.querySelector('.categories').replaceChildren(...categoriesOrder.map((name, i) => {
  const button = document.createElement('button');
  button.className = 'category-btn'; button.dataset.category = name;
  button.setAttribute('aria-label',name); button.onclick = () => selectCategory(name);
  button.innerHTML = '<span class="category-icon" aria-hidden="true">' + handIconMarkup(categoryIcons[i]) + '<span class="nav-check-container hidden"><img src="assets/icons/nav-selection-check.webp" width="128" height="128" alt=""></span></span>';
  return button;
}));

// Dialog keyboard support keeps the existing click/touch operations available.
let previousFocus = null;
for (const modal of document.querySelectorAll('.modal')) {
  new MutationObserver(() => {
    if (!modal.classList.contains('hidden')) {
      previousFocus = document.activeElement;
      modal.querySelector('input,button,select')?.focus({preventScroll:true});
    } else previousFocus?.focus({preventScroll:true});
  }).observe(modal, {attributes:true,attributeFilter:['class']});
  modal.addEventListener('keydown', e => {
    if (e.key === 'Escape') { e.preventDefault(); modal.querySelector('#confirm-cancel-btn,button[type="button"]')?.click(); }
    if (e.key !== 'Tab') return;
    const items = [...modal.querySelectorAll('button,input,select')].filter(el => !el.disabled);
    const first = items[0], last = items.at(-1);
    if (e.shiftKey && document.activeElement === first) {e.preventDefault();last.focus();}
    else if (!e.shiftKey && document.activeElement === last) {e.preventDefault();first.focus();}
  });
}

// Continue through cooking methods only after a fresh gesture at the list end.
recipePageTurn = (() => {
  const list = document.getElementById('recipe-list-container');
  const caption = document.getElementById('active-filter-indicator');
  caption.setAttribute('aria-live', 'polite');
  let lastKey = '', serial = 0, busy = false, committing = false;
  let cooldownUntil = 0, suppressClickUntil = 0, wheel = null, touch = null;
  const animations = new Set();
  const key = () => [activeCategory, activeDimension, activeSubTag].join('|');
  const atBottom = () => list.scrollHeight - list.clientHeight - list.scrollTop <= 3;
  const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
  const allowed = () => !isEditMode && !document.getElementById('app-screen').classList.contains('hidden')
    && !document.querySelector('.modal:not(.hidden)') && document.getElementById('cart-popup').classList.contains('hidden');
  function nextMethod() {
    if (activeDimension !== '烹饪方式' || !activeSubTag) return null;
    const tags = [...document.querySelectorAll('#left-sidebar-tags .tag-btn')];
    const index = tags.findIndex(button => button.dataset.tagValue === activeSubTag);
    return index >= 0 ? tags[index + 1]?.dataset.tagValue || null : null;
  }
  function cancel() {
    serial++;
    for (const animation of animations) animation.cancel();
    animations.clear();
    busy = false; wheel = null; touch = null; cooldownUntil = 0;
    list.removeAttribute('aria-busy');
  }
  async function animatePage(frames, duration) {
    const content = list.querySelector('.recipe-page-content');
    if (reducedMotion() || !content?.animate) return;
    const animation = content.animate(frames, {duration, easing:'cubic-bezier(.2,.65,.3,1)', fill:'both'});
    animations.add(animation);
    try { await animation.finished; }
    finally { animation.cancel(); animations.delete(animation); }
  }
  async function advance() {
    const next = nextMethod();
    if (!next || busy || !allowed() || performance.now() < cooldownUntil) return;
    const token = ++serial, previousKey = key();
    busy = true; cooldownUntil = performance.now() + 900;
    list.setAttribute('aria-busy', 'true');
    try {
      await animatePage([{transform:'translateY(0)',opacity:1},{transform:'translateY(-36px)',opacity:0}], 160);
      if (token !== serial || key() !== previousKey || !allowed()) return;
      activeSubTag = next;
      committing = true;
      try { renderApp(); } finally { committing = false; }
      document.querySelector('#left-sidebar-tags [aria-pressed="true"]')?.scrollIntoView({block:'nearest', behavior:reducedMotion()?'auto':'smooth'});
      await animatePage([{transform:'translateY(44px)',opacity:0},{transform:'translateY(0)',opacity:1}], 260);
    } catch (error) {
      if (error.name !== 'AbortError') console.error(error);
    } finally {
      if (token === serial) { busy = false; list.removeAttribute('aria-busy'); }
    }
  }
  list.addEventListener('wheel', event => {
    if (event.ctrlKey || Math.abs(event.deltaX) > Math.abs(event.deltaY) || !allowed()) return;
    const now = performance.now();
    if (!wheel || now - wheel.last > 300) wheel = {eligible:atBottom() && !busy && now >= cooldownUntil, distance:0, triggered:false, last:now};
    wheel.last = now;
    if (busy || wheel.triggered || now < cooldownUntil) { if (event.cancelable) event.preventDefault(); return; }
    if (event.deltaY <= 0) { wheel.eligible = false; wheel.distance = 0; return; }
    if (!wheel.eligible || !atBottom() || !nextMethod()) return;
    if (event.cancelable) event.preventDefault();
    wheel.distance += event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? list.clientHeight : 1);
    if (wheel.distance >= 64) { wheel.triggered = true; void advance(); }
  }, {passive:false});
  list.addEventListener('touchstart', event => {
    if (event.touches.length !== 1) { touch = null; return; }
    const point = event.touches[0];
    touch = {id:point.identifier, x:point.clientX, y:point.clientY, key:key(), eligible:atBottom() && allowed() && !busy && performance.now() >= cooldownUntil};
  }, {passive:true});
  list.addEventListener('touchmove', event => {
    if (!touch || event.touches.length !== 1) { touch = null; return; }
    const point = event.touches[0], dy = touch.y - point.clientY, dx = point.clientX - touch.x;
    if (Math.abs(dy) > 12 && Math.abs(dy) > Math.abs(dx)) suppressClickUntil = performance.now() + 400;
    if (touch.eligible && dy > 0 && dy > Math.abs(dx) * 1.3 && nextMethod() && allowed() && event.cancelable) event.preventDefault();
  }, {passive:false});
  list.addEventListener('touchend', event => {
    const gesture = touch; touch = null;
    if (!gesture?.eligible || event.touches.length || key() !== gesture.key) return;
    const point = [...event.changedTouches].find(item => item.identifier === gesture.id);
    if (!point) return;
    const dy = gesture.y - point.clientY, dx = point.clientX - gesture.x;
    if (dy >= 64 && dy > Math.abs(dx) * 1.3 && atBottom()) void advance();
  }, {passive:true});
  list.addEventListener('touchcancel', () => { touch = null; }, {passive:true});
  list.addEventListener('click', event => {
    if (busy || performance.now() < suppressClickUntil) { event.preventDefault(); event.stopImmediatePropagation(); }
  }, true);
  return {
    beforeRender() { if (!committing) cancel(); },
    afterRender() {
      if (lastKey !== key()) { list.scrollTop = 0; lastKey = key(); }
      const next = nextMethod();
      if (!next || isEditMode) return;
      const button = document.createElement('button');
      button.type = 'button'; button.className = 'recipe-next-method';
      button.textContent = '下一个：' + next + ' ↓';
      button.setAttribute('aria-label', '查看' + next + '菜谱');
      button.onclick = () => void advance();
      list.querySelector('.recipe-page-content').append(button);
    }
  };
})();
