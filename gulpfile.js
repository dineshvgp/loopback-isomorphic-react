var browserify = require('browserify');
var gulp = require('gulp');
var source = require("vinyl-source-stream");
var reactify = require('reactify');
var babelify = require('babelify');

gulp.task('es6', function() {
	browserify({
    	entries: './client/app.js',
    	debug: true
  	})
    .transform("babelify", {"presets": ["react", "es2015", "babel-preset-stage-0"]})
    .bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./public/assets'));
});


