var gulp = require('gulp');
var uglify = require('gulp-uglify');
var markdown = require('gulp-markdown');

//添加 压缩js 的任务
gulp.task('minify',function(){ //自定义名为minify
	gulp.src('js/app.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
});

gulp.task('mark', function () {
    return gulp.src('intro.md')
        .pipe(markdown())
        .pipe(gulp.dest('dist'));
});

var webpack = require('gulp-webpack');
gulp.task('default', function() {
  return gulp.src('src/app.js')
    .pipe(webpack({
		output:{
			filename:'[name].js'
		},
		watch :true,
		module: {
	      loaders: [
	        { test: /\.css$/, loader: 'style!css' },
	      ],
    	},
	}))
    .pipe(gulp.dest('dist'));
});
