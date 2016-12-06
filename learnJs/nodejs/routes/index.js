// var Photo = require('./models/Photo');
// var photo = new Photo();


exports.submit = function(req,res){
	res.render('show',{path:req.file.filename});
	console.log(req.file.filename);
};


exports.show = function(req,res){
	res.render("index");
};
