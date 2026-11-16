// Existing recipe operations retained from the online snapshot.

      // 33 Standard recipes from spreadsheet
      const defaultRecipes = [
        { name: "菠萝炒吊龙", ingredients: "吊龙", category: "荤", type: "牛", method: "炒", difficulty: "2", flavor: "开胃", garnish: "菠萝" },
        { name: "香菜炒吊龙", ingredients: "吊龙", category: "荤", type: "牛", method: "炒", difficulty: "2", flavor: "开胃", garnish: "香菜" },
        { name: "蒜心炒吊龙", ingredients: "吊龙", category: "荤", type: "牛", method: "炒", difficulty: "2", flavor: "适中", garnish: "蒜心" },
        { name: "虫草花蒸吊龙", ingredients: "吊龙", category: "荤", type: "牛", method: "蒸", difficulty: "1", flavor: "清淡", garnish: "虫草花" },
        { name: "藠头炒鸡胸肉", ingredients: "鸡胸肉", category: "荤", type: "鸡", method: "炒", difficulty: "2", flavor: "开胃", garnish: "藠头" },
        { name: "小米辣炒鸡胸肉", ingredients: "鸡胸肉", category: "荤", type: "鸡", method: "炒", difficulty: "2", flavor: "开胃", garnish: "小米辣" },
        { name: "胡萝卜炒鸡胸肉", ingredients: "鸡胸肉", category: "荤", type: "鸡", method: "炒", difficulty: "2", flavor: "适中", garnish: "胡萝卜" },
        { name: "奥尔良煎鸡胸肉", ingredients: "鸡胸肉", category: "荤", type: "鸡", method: "煎", difficulty: "3", flavor: "油腻", garnish: "奥尔良" },
        { name: "炒豆苗", ingredients: "豆苗", category: "素", type: "蔬菜", method: "炒", difficulty: "1", flavor: "清淡", garnish: "" },
        { name: "上汤豆苗", ingredients: "豆苗", category: "素", type: "蔬菜", method: "上汤", difficulty: "2", flavor: "清淡", garnish: "" },
        { name: "五花肉炒菜心干", ingredients: "菜心干", category: "素", type: "干货", method: "炒", difficulty: "2", flavor: "开胃", garnish: "五花肉" },
        { name: "酸梅酱炖鸭翅", ingredients: "鸭翅", category: "荤", type: "鸭", method: "炖", difficulty: "3", flavor: "开胃", garnish: "酸梅酱" },
        { name: "菠萝炒鸭", ingredients: "鸭", category: "荤", type: "鸭", method: "炒", difficulty: "3", flavor: "开胃", garnish: "菠萝" },
        { name: "藠头炒鸭", ingredients: "鸭", category: "荤", type: "鸭", method: "炒", difficulty: "3", flavor: "开胃", garnish: "藠头" },
        { name: "胡萝卜炖排骨", ingredients: "排骨", category: "荤", type: "猪", method: "炖", difficulty: "3", flavor: "浓烈", garnish: "胡萝卜" },
        { name: "洋葱煎排骨", ingredients: "排骨", category: "荤", type: "猪", method: "煎", difficulty: "3", flavor: "油腻", garnish: "洋葱" },
        { name: "蒸鸡", ingredients: "鸡", category: "荤", type: "鸡", method: "蒸", difficulty: "2", flavor: "清淡", garnish: "" },
        { name: "虫草花蒸鸡", ingredients: "鸡", category: "荤", type: "鸡", method: "蒸", difficulty: "2", flavor: "清淡", garnish: "虫草花" },
        { name: "五花肉炒荞苗", ingredients: "荞苗", category: "荤素", type: "蔬菜", method: "炒", difficulty: "2", flavor: "开胃", garnish: "五花肉" },
        { name: "荞苗炒五花肉", ingredients: "五花肉", category: "荤素", type: "猪", method: "炒", difficulty: "2", flavor: "开胃", garnish: "荞苗" },
        { name: "甜醋炖猪手", ingredients: "猪手", category: "荤", type: "猪", method: "炖", difficulty: "3", flavor: "油腻", garnish: "甜醋" },
        { name: "蒸鸡蛋", ingredients: "鸡蛋", category: "荤", type: "鸡", method: "蒸", difficulty: "1", flavor: "清淡", garnish: "" },
        { name: "银鱼蒸鸡蛋", ingredients: "鸡蛋", category: "荤", type: "鸡", method: "蒸", difficulty: "1", flavor: "清淡", garnish: "银鱼" },
        { name: "洋葱焗鸡腿", ingredients: "鸡腿", category: "荤", type: "鸡", method: "焗", difficulty: "2", flavor: "浓烈", garnish: "洋葱" },
        { name: "白灼虾", ingredients: "虾", category: "荤", type: "水产", method: "白灼", difficulty: "1", flavor: "清淡", garnish: "" },
        { name: "蒸鲫鱼", ingredients: "鲫鱼", category: "荤", type: "水产", method: "蒸", difficulty: "1", flavor: "清淡", garnish: "" },
        { name: "炒鱿鱼", ingredients: "鱿鱼", category: "荤", type: "水产", method: "炒", difficulty: "2", flavor: "清淡", garnish: "" },
        { name: "白灼鱿鱼", ingredients: "鱿鱼", category: "荤", type: "水产", method: "白灼", difficulty: "1", flavor: "清淡", garnish: "" },
        { name: "蒸鱼干", ingredients: "鱼干", category: "荤", type: "干货", method: "蒸", difficulty: "1", flavor: "开胃", garnish: "" },
        { name: "炒花甲", ingredients: "花甲", category: "荤", type: "水产", method: "炒", difficulty: "2", flavor: "开胃", garnish: "" },
        { name: "番茄炒蛋", ingredients: "蛋", category: "荤素", type: "鸡", method: "炒", difficulty: "1", flavor: "开胃", garnish: "番茄" },
        { name: "辣椒煎虾滑", ingredients: "虾滑", category: "荤素", type: "水产", method: "煎", difficulty: "2", flavor: "开胃", garnish: "辣椒" },
        { name: "辣椒煎鱼滑", ingredients: "鱼滑", category: "荤素", type: "水产", method: "煎", difficulty: "2", flavor: "开胃", garnish: "辣椒" }
      ];

      // Application states
      let recipes = [];
      let activeCategory = "鸡";
      let activeDimension = null; // "烹饪方式", "难易程度", "开胃菜", "快手菜"
      let activeSubTag = null; // Selected tag on Left Sidebar (e.g. "炒" or "3星")
      let hasUnreadCartItems = false;
      let currentRecommendedDish = null;
      let isEditMode = false;

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
        const garnish = document.getElementById('dish-garnish').value.trim();
        const type = document.getElementById('dish-type').value;
        const method = document.getElementById('dish-method').value;
        const difficulty = document.getElementById('dish-difficulty').value;
        const flavor = document.getElementById('dish-flavor').value;

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

        const category = (type === "蔬菜") ? "素" : "荤";

        const newDish = {
          name,
          ingredients,
          category,
          type,
          method,
          difficulty,
          flavor,
          garnish
        };

        recipes.push(newDish);
        localStorage.setItem('garlic_recipes', JSON.stringify(recipes));
        closeAddDishModal();
        
        showToast("新菜品添加成功！", "success");
        renderApp();
      }

      // Download CSV Template & Current Recipes
      function downloadCSVTemplate() {
        const headers = ["菜名", "食材", "类别", "种类", "烹饪方式", "难易程度", "口味", "配料"];
        let csvContent = "\ufeff"; // UTF-8 BOM for Excel Chinese compatibility
        csvContent += headers.join(",") + "\r\n";
        
        recipes.forEach(recipe => {
          const row = [
            recipe.name || "",
            recipe.ingredients || "",
            recipe.category || "",
            recipe.type || "",
            recipe.method || "",
            recipe.difficulty || "",
            recipe.flavor || "",
            recipe.garnish || ""
          ];
          const escapedRow = row.map(val => {
            let str = String(val).replace(/"/g, '""');
            if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
              str = `"${str}"`;
            }
            return str;
          });
          csvContent += escapedRow.join(",") + "\r\n";
        });

        try {
          const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
          const url = URL.createObjectURL(blob);
          const link = document.createElement("a");
          link.setAttribute("href", url);
          link.setAttribute("download", "garlic_recipes.csv");
          link.style.visibility = 'hidden';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          showToast("📥 菜谱数据导出成功！", "success");
        } catch (e) {
          console.error(e);
          showToast("❌ 导出 CSV 失败！", "error");
        }
      }

      // Confirm deletion of a dish from recipes list
      function confirmDeleteDish(recipeName) {
        showConfirm(`确定要删除“${recipeName}”这道菜吗？`, "🗑️", () => {
          recipes = recipes.filter(r => r.name !== recipeName);
          localStorage.setItem('garlic_recipes', JSON.stringify(recipes));
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
      const categoriesOrder = ["鸡", "猪", "牛", "水产", "鸭", "蔬菜", "干货"];

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
        const stored = localStorage.getItem('garlic_recipes');
        if (stored) {
          try {
            const parsed = JSON.parse(stored);
            if (Array.isArray(parsed)) {
              recipes = parsed.filter(r => r && r.name && typeof r.name === 'string' && !r.name.trim().startsWith('='));
            } else {
              recipes = [...defaultRecipes];
            }
          } catch(e) {
            recipes = [...defaultRecipes];
          }
        } else {
          recipes = [...defaultRecipes];
          localStorage.setItem('garlic_recipes', JSON.stringify(recipes));
        }
      }

      // Restore to Default Recipes
      function restoreDefaults() {
        recipes = [...defaultRecipes];
        localStorage.setItem('garlic_recipes', JSON.stringify(recipes));
        showToast("已恢复默认33道菜谱！", "success");
        shakeRecommendation();
        renderApp();
      }

      // Update Database via file uploader
      function triggerFileSelect() {
        document.getElementById('file-uploader').click();
      }

      function handleFileUpload(event) {
        const file = event.target.files[0];
        if (!file) return;

        const fileName = file.name.toLowerCase();
        
        if (fileName.endsWith('.xlsx')) {
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
        const headers = rawRows[0].map(h => String(h || '').trim());
        const headerMap = {
          "菜名": "name",
          "食材": "ingredients",
          "类别": "category",
          "种类": "type",
          "烹饪方式": "method",
          "难易程度": "difficulty",
          "口味": "flavor",
          "配料": "garnish"
        };

        const mappedFields = headers.map(h => headerMap[h] || null);
        const importedRecipes = [];

        for (let i = 1; i < rawRows.length; i++) {
          const row = rawRows[i];
          if (!row || row.length === 0 || !row[0]) continue; // Skip empty/header rows
          
          const recipe = {
            name: "", ingredients: "", category: "", type: "", 
            method: "", difficulty: "1", flavor: "适中", garnish: ""
          };
          
          headers.forEach((h, idx) => {
            const field = mappedFields[idx];
            if (field) {
              let val = row[idx];
              if (val === undefined || val === null) val = "";
              recipe[field] = String(val).trim();
            }
          });
          
          if (recipe.name) {
            // Check if recipe name starts with '=' (Excel Formula)
            if (recipe.name.startsWith('=')) {
              const prefix = recipe.garnish ? recipe.garnish : "";
              const mid = recipe.method ? recipe.method : "";
              const suffix = recipe.ingredients ? recipe.ingredients : "";
              const repairedName = (prefix + mid + suffix).trim();
              
              if (repairedName && !repairedName.startsWith('=')) {
                recipe.name = repairedName;
              } else {
                // If we can't construct a valid name, skip this formula row
                continue;
              }
            }
            importedRecipes.push(recipe);
          }
        }

        if (importedRecipes.length > 0) {
          recipes = importedRecipes;
          localStorage.setItem('garlic_recipes', JSON.stringify(recipes));
          showToast(`🎉 成功导入 ${importedRecipes.length} 条菜谱并自动清洗公式数据！`, "success");
          shakeRecommendation();
          renderApp();
        } else {
          showToast("⚠️ 未解析出有效菜品！（已跳过所有无法修复的公式或空行）", "error");
        }
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
          
          renderApp();
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
        activeCategory = category;
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
        recipes = recipes.filter(r => r && r.name && typeof r.name === 'string' && !r.name.trim().startsWith('='));
        document.querySelectorAll('.category-btn').forEach(btn => {
          const selected = btn.dataset.category === activeCategory;
          btn.classList.toggle('active', selected);
          btn.setAttribute('aria-pressed', String(selected));
          btn.querySelector('.nav-check-container').classList.toggle('hidden', !selected);
        });
        const leftSidebar = document.getElementById('left-sidebar-tags');
        let tags = [];
        if (activeDimension === '烹饪方式') {
          tags = [['炒','🔥'],['蒸','💧'],['煎','🍳'],['焗','🥘'],['炖','🍲'],['白灼','🥗'],['上汤','🥣']].map(([text,emoji]) => ({text,emoji,value:text}));
        } else if (activeDimension === '难易程度') {
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
            btn.innerHTML = '<span class="tag-emoji" aria-hidden="true">' + (activeDimension === '难易程度' ? handStarMarkup(Number(tag.value)) : handIconMarkup(handIconKey(tag.emoji))) + '</span><span class="tag-label" aria-hidden="true">' + tag.text + '</span>';
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
        const dimensions = {'烹饪方式':'dim-method','难易程度':'dim-difficulty','开胃菜':'dim-appetizer','快手菜':'dim-quick'};
        for (const [dimension,id] of Object.entries(dimensions)) {
          const btn = document.getElementById(id);
          const selected = activeDimension === dimension;
          btn.classList.toggle('bg-[#b5cad9]', selected);
          btn.setAttribute('aria-pressed', String(selected));
        }
        let filtered = recipes.filter(recipe => recipe.type === activeCategory);
        let indicatorText = '种类：' + activeCategory;
        if (activeDimension === '烹饪方式') {
          if (activeSubTag) filtered = filtered.filter(r => r.method === activeSubTag);
          indicatorText = activeCategory + ' ＋ ' + (activeSubTag || '全部烹饪');
        } else if (activeDimension === '难易程度') {
          if (activeSubTag) filtered = filtered.filter(r => r.difficulty === activeSubTag);
          indicatorText = activeCategory + ' ＋ ' + (activeSubTag ? '难度:' + activeSubTag + '星' : '全部难度');
        } else if (activeDimension === '开胃菜') {
          filtered = filtered.filter(r => r.flavor === '开胃');
          indicatorText = activeCategory + ' ＋ 开胃菜';
        } else if (activeDimension === '快手菜') {
          filtered = filtered.filter(r => r.difficulty === '1');
          indicatorText = activeCategory + ' ＋ 快手菜';
        }
        document.getElementById('active-filter-indicator').innerText = indicatorText;
        document.getElementById('filtered-count').innerText = filtered.length + ' 条';
        const list = document.getElementById('recipe-list-container');
        list.replaceChildren();
        if (!filtered.length) {
          list.innerHTML = '<div class="empty-state"><div class="empty-icon">' + handIconMarkup('frying-pan') + '</div><p>这里还没有菜品</p><p>换个分类或筛选试试</p><button class="paint-button small" onclick="restoreDefaults()">恢复默认33道</button></div>';
        }
        for (const recipe of filtered) {
          const row = document.createElement('article');
          row.className = 'recipe-row';
          const name = document.createElement('h2');
          name.className = 'dish-name';
          name.textContent = recipe.name;
          const copy = document.createElement('div');
          copy.className = 'dish-copy';
          copy.append(name);
          const meta = document.createElement('div');
          meta.className = 'dish-meta';
          for (const text of [recipe.ingredients,recipe.method,recipe.flavor]) {
            if (!text) continue;
            const span = document.createElement('span'); span.textContent = text; meta.append(span);
          }
          const stars = document.createElement('span'); stars.className = 'dish-stars';
          const difficulty = parseInt(recipe.difficulty) || 1;
          stars.innerHTML = handStarMarkup(difficulty);
          stars.setAttribute('role', 'img');
          stars.setAttribute('aria-label', '难度' + difficulty + '星'); meta.append(stars);
          copy.append(meta);
          const detail = document.createElement('p'); detail.className = 'dish-detail';
          detail.textContent = recipe.garnish ? '配：' + recipe.garnish : '基础烹饪'; copy.append(detail);
          const btn = document.createElement('button');
          btn.className = isEditMode ? 'delete-btn' : 'add-btn';
          btn.textContent = isEditMode ? '×' : '＋';
          btn.setAttribute('aria-label', (isEditMode ? '删除菜品：' : '加入砂锅：') + recipe.name);
          btn.onclick = e => {e.stopPropagation(); isEditMode ? confirmDeleteDish(recipe.name) : addToCart(recipe.name);};
          if (!isEditMode) row.onclick = () => addToCart(recipe.name);
          row.append(copy, btn); list.append(row);
        }
        renderCartUI();
      }


      function getCart() {
        const stored = localStorage.getItem('garlic_cart');
        return stored ? JSON.parse(stored) : [];
      }

      function saveCart(cart) {
        localStorage.setItem('garlic_cart', JSON.stringify(cart));
        renderCartUI();
      }

      function addToCart(dishName) {
        const cart = getCart();
        if (cart.includes(dishName)) {
          showToast(`🍲 “${dishName}” 已经在砂锅里啦！`);
          return;
        }
        
        cart.push(dishName);
        saveCart(cart);
        
        // Trigger unread cart stars state
        hasUnreadCartItems = true;
        document.getElementById('cart-star').classList.remove('hidden');
        
        showToast(`🎉 成功添加 “${dishName}”！`, "success");
      }

      function removeFromCart(dishName) {
        let cart = getCart();
        cart = cart.filter(item => item !== dishName);
        saveCart(cart);
        showToast(`🗑️ 已从砂锅取出 “${dishName}”`);
      }

      function clearCart() {
        showConfirm("确定要清空砂锅里的所有菜谱吗？", "🗑️", () => {
          saveCart([]);
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
    

const categoryIcons = ['chicken','pig','cow','fish','duck','cabbage','mushroom'];
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
