var parse = require('url').parse;

module.exports = function route(obj){
	return function(req,res,next){
		if(!obj[req.method]){
			next();
			return;
		}
		var routes = obj[req.method];//拿到req.method对应路径
		var paths = Object.keys(routes);//放入数组中
		var url = parse(req.url);//解析URL
		for(var i=0;i<paths.length;i++){
			var path = paths[i];
			var fn = routes[path];
			path.replace(/\//g,'\\/');
			path.replace(/:(\w+)/g,'([^\\/]+)');
			var re = new RegExp('^'+path+'$');
				var captures = url.pathname.match(re);
				if(captures){
					var args = [req,res].concat(captures.slice(1));
					fn.apply(null, args);
					return;
				}
		}
		next();
	};
};
