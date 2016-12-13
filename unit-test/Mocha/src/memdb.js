var db = [];

exports.save = function(doc){
	db.push(doc);
};

exports.findfirst = function(obj){
	return db.filter(function(doc){
		for (var key in obj){
			if(doc[key] != obj[key]){
				return false;
			}
		}
		return true; //匹配 则返回整个文档
	}).shift(); //只拿第一个文档
};
