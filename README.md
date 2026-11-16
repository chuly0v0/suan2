# 蒜了 2.0

一本简约手绘风的家常菜谱。纯静态 HTML / CSS / JavaScript，可直接部署到 GitHub Pages，无需安装依赖或运行构建命令。

当前版本包含自绘食材与操作图标、顶部红色打钩、左侧紧凑导航与弹性展开文字、联动筛选、砂锅选菜、菜品管理和 CSV / Excel 导入导出。

## 文件结构

```text
index.html
styles.css
icons.js
app.js
.nojekyll
README.md
assets/
```

上传时，把以上内容放在 GitHub 仓库根目录。不要在仓库中再套一层“蒜了2.0”目录，不要拆散或重命名 assets 中的文件。

## GitHub Pages 设置

在仓库 Settings → Pages 中设置：Source 选 Deploy from a branch；Branch 选 main；Folder 选 / (root)，然后保存。新仓库可命名为 suan2，并设为 Public。

发布地址以 GitHub Pages 页面显示的 Visit site 为准。详细操作见 [GitHub 官方发布说明](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。

## 数据保存

菜谱与砂锅存储在访问者当前浏览器的 localStorage 中，不通过服务器同步。默认内置 33 道菜谱。“更新数据”只更新当前浏览器，不会直接修改 GitHub 文件；“下载模板”会导出当前菜谱数据，可作备份。

沿用存储键 garlic_recipes 与 garlic_cart。同一账号 github.io 下的多个项目页面属于相同来源，如果同时保留旧版和新版，两者会读取同一浏览器里的这两份数据。发布前可在旧版先导出 CSV 备份。

## 加载说明

图标使用小尺寸透明 WebP；字体按常用字与完整字库分开加载。仓库总大小不等于每次打开网页的下载量。

原始绘画文件、原始字体、检查脚本和开发记录未放入本发布目录。
