## express4.x + avalon2

> * ejs模板 html文件
> * 用avalon渲染页面 submit里把req.file.filename保存到本地json中 或 redis
> * my_app.js 提供avalon模块 与jquery混用get本地json/redis到页面
> * 现在图片为ejs 模板显示

---

- ./models : 创建数据库对象
- ./public : 静态文件默认保存地址 app.js中设定
- ./routes ： express的路由文件 根据app.js中查找不同路由js
- ./views  : 页面展示 html文件 应用ejs模板
	- /index.html : 入口页面
	- /show.html  : 上传图片后页面
- app.js ：入口文件
