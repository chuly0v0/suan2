// Shared rules for the page, legacy migration and Excel exports.
const recipeSchema = (() => {
  const groups = ['禽类','猪','牛羊','水产','蛋豆','蔬菜','干货'];
  const methods = ['炒','蒸','煎','焗','炖','白灼','上汤','其它'];
  const headers = ['菜名','食材','食材分类','烹饪方式','开胃','方便程度'];
  const split = value => (Array.isArray(value) ? value : String(value ?? '').split(/[、,，;；|/\n]+/)).map(v=>String(v).trim()).filter(Boolean);
  const unique = values => [...new Set(values)];
  const aliases = {'鸡':'禽类','鸭':'禽类','鹅':'禽类','鸽':'禽类','鸡鸭鹅鸽':'禽类','禽类':'禽类','猪':'猪','牛':'牛羊','羊':'牛羊','牛羊':'牛羊','水产':'水产','蛋':'蛋豆','豆制品':'蛋豆','蛋豆':'蛋豆','蔬菜':'蔬菜','菌菇':'蔬菜','干货':'干货'};
  const groupNames = value => unique(split(value).map(v=>aliases[v] || v));
  const rules = [
    ['用途','第一张工作表用于导入；请保留六列表头，不用公式生成菜名。'],
    ['食材分类','可多选，用顿号分隔；仅使用：'+groups.join('、')+'。主要食材涉及几个组就标几个，少量葱姜蒜等调味不增加蔬菜标签。'],
    ['禽类','鸡、鸭、鹅、鸽及其他禽肉；蛋归蛋豆，不能因为鸡蛋就标禽类。'],
    ['牛羊','牛肉与羊肉合并；猪肉及猪内脏归猪，禽内脏归禽类。'],
    ['蛋豆','蛋类、豆腐、豆干、腐竹等豆制品；与其他主要食材混搭时同时标注相应分类。'],
    ['蔬菜与干货','蔬菜、水果配菜及鲜菌菇归蔬菜；干制食材再加干货，例如鱼干为水产、干货，干香菇为蔬菜、干货。'],
    ['烹饪方式','仅使用：'+methods.join('、')+'。按实际主要做法填一种；烤、炸、拌、卤等暂归其它，多步骤或做法不明需向用户确认。'],
    ['开胃','填是或否，依据用户个人偏好；不要把酸、辣自动等同于开胃。'],
    ['方便程度','填1、2、3：1星省事，2星一般，3星较费事；综合备料、操作、等待及清洗负担，越低越方便。快手菜只筛选1星。'],
    ['菜名与食材','保留用户菜名；食材合并关键用料，包含影响菜品区别的配菜或酱料，不要求补齐水盐等常规调味。'],
    ['重复与不确定','不凭名称顺序自动删除菜品。不确定的原料、方便星级或个人开胃偏好，单独列待确认，不编造确定答案。'],
    ['本表迁移说明','本次保留旧表33道及菜名；原难度星级仅作为方便程度初值，原开胃映射为是，其余为否，需用户按个人做法复核。'],
    ['更新数据','网页导入会替换当前菜谱；追加菜品时先拿到用户导出的完整表，再追加并检查重名，不要遗漏旧菜。']
  ];
  function normalize(source) {
    const canonical = Array.isArray(source.types);
    let ingredients = unique([...split(source.ingredients), ...split(source.garnish)]);
    let types = groupNames(canonical ? source.types : source.type);
    if (!canonical) {
      const food = ingredients.join('、');
      if (/鸡蛋|鸭蛋|鹅蛋|鹌鹑蛋|皮蛋|咸蛋|豆腐|豆干|腐竹|豆皮/.test(food) || ingredients.includes('蛋')) {
        if (!/鸡肉|鸡胸|鸡腿|鸭肉|鸭翅|鹅肉|鸽肉/.test(food)) types = types.filter(t=>t!=='禽类');
        types.push('蛋豆');
      }
      if (/五花肉|猪肉|排骨|猪手/.test(food)) types.push('猪');
      if (/菠萝|香菜|蒜心|小米辣|辣椒|胡萝卜|洋葱|荞苗|番茄|菜心|豆苗|香菇|木耳|虫草花/.test(food)) types.push('蔬菜');
      if (/鱼干|虾干|鱿鱼干/.test(food)) types.push('水产','干货');
      if (/干香菇|干木耳/.test(food)) types.push('蔬菜','干货');
      if (String(source.name).includes('银鱼')) { types.push('水产'); if(!food.includes('银鱼'))ingredients.push('银鱼'); }
    }
    types = groups.filter(t=>types.includes(t));
    const rawMethod = String(source.method || '').trim();
    const convenience = String(source.convenience ?? source.difficulty ?? '').replace(/[星★☆\s]/g,'');
    return {name:String(source.name || '').trim(), ingredients:ingredients.join('、'), types,
      method:methods.includes(rawMethod) ? rawMethod : '其它',
      appetizing:typeof source.appetizing==='boolean' ? source.appetizing : ['是','true','1','开胃'].includes(String(source.appetizing ?? source.flavor ?? '').trim()),
      convenience:['1','2','3'].includes(convenience) ? convenience : ''};
  }
  const row = recipe => {const r=normalize(recipe);return [r.name,r.ingredients,r.types.join('、'),r.method,r.appetizing?'是':'否',r.convenience?Number(r.convenience):''];};
  return {groups,methods,headers,rules,normalize,row,split,groupNames};
})();
