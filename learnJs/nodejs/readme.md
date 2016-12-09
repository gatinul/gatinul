## express4.x + avalon2

> * ejs模板 html文件
> * 用avalon渲染页面 exports.submit把req.file.filename保存到 redis
> * my_app.js 提供avalon模块 与jquery混用get /find 在app.js,index.js中添加新路由(exports.find)
> * ~~现在图片为ejs 模板显示~~
> * show.html 图片 文字 都为avalon get /find 读取 同步到页面

### 文件目录

- ./models : 创建数据库对象
- ./public : 静态文件默认保存地址 app.js中设定
	- /js/my_app.js ：avalon控制模块
- ./routes ： express的路由文件 根据app.js中查找不同路由js
	- /index.js : 暴露main,submit,find三个路由函数  main上传图片前(index.html) submit上传图片到public并存入redis(转到show.html) find 当请求/find时 找出redis中的'path'数据 
- ./views  : 页面展示 html文件 应用ejs模板
	- /index.html : 入口页面
	- /show.html  : 上传图片后页面
- app.js ：入口文件
