module.exports = function(grunt){

	grunt.initConfig({
	  concat: {
	    options: {
	      separator: ';',
	    },
	    dist: {
	      src: ['js/jquery-1.11.1.min.js', 'js/jquery-ui.min.js','js/moderniz.js', 'js/listBatiment.js','js/main.js'],
	      dest: 'js/index.js',
	    },
	  },
	  uglify: {
	    my_target: {
	      files: {
	        'js/index.js': ['js/index.js']
	      }
	    }
	  }
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['concat', 'uglify']);

}