var webpack = require('webpack');
var gulp = require('gulp');


module.exports = {
	entry : './entry.js', //控制层js
	output : {
		path:__dirname,
		filename:'bundle.js'  //转到当前项目下的index.js 展示层
	},
	watch:true,
	module: {
	    loaders: [
	      {test: /\.css$/, loader: 'style!css'}
	    ]
  	},
	plugins:[
		new webpack.BannerPlugin('the file is created by gatinul')  // 加注释
	]
};
