module.exports = function(grunt) {

  var sassStyle = 'expanded';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	sass: {
		output: {
			options: {
				style: sassStyle
			},
			files: {
				'./dist/style.css': './css/main1.css'
			}
		}
	},
	concat: {
		dist:{
			src: ['./src/main1.js'],
       		dest: './dist/global.js',
		},
	},
	uglify: {
		compressjs:{
			files:{
				'./dist/global.min.js': ['./dist/global.js']
			}
		}
	},
	jshint: {
		all: ['./global.js']
	},
	watch: {
		scripts: {
			files: ['./src/main1.js'],
			tasks: ['concat', 'jshint', 'uglify']
		},
		sass: {
			files: ['./css/main1.css'],
			tasks: ['sass']
		},
		livereload: {
			options: {
				livereload: '<%= connect.options.livereload %>'
			},
			files: [
				'app/danmu.html',
				'css/style.css',
				'dist/global.min.js'
			]
		}
	},
	connect: {
      options: {
          port: 9000,
          open: true,
          livereload: 35729,
          // Change this to '0.0.0.0' to access the server from outside
          hostname: 'localhost'
      },
      server: {
        options: {
          port: 9001,
          base: './'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('outputcss',['sass']);
  grunt.registerTask('concatjs',['concat']);
  grunt.registerTask('compressjs',['concat','jshint','uglify']);
  grunt.registerTask('watchit',['sass','concat','jshint','uglify','connect','watch']);
  grunt.registerTask('default');

};