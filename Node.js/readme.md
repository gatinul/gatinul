## Node In Action 
《Nodejs实战》的部分代码
 
---

- 文件监视器：Watcher.js
	- 执行Watcher.js 则watch文件夹下的文件被挪到done文件夹下 且小写
- 任务列表及存储
	- node taskList.js add/list  add和list 为两个命令，add之后 任务会以数组形式保存在.task文件下
- Node存储数据
	- mysql timetrack:本地mysql下建timetrack数据库
	- redis 直接用指令存储数据
	- mongo 依次启动bin目录下 mongod.exe和mongo.exe
- connect
	- middleware 中间插件的路由机制
	