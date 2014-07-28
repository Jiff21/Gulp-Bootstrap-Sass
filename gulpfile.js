'use strict';
// generated on 2014-07-25 using generator-gulp-bootstrap 0.0.4 modified according to http://viget.com/extend/gulp-browserify-starter-faq

// load plugins that came with generator:
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var gutil = require('gulp-util');

// Quick Install from http://viget.com/extend/gulp-browserify-starter-faq
var gulp = require('./gulp')([
	'fonts',
	'html',
	'images',
	'scripts',
	'serve',
	'styles',
	'watch',
	'wiredep',
	'serve'
]);


// Not sure if I should move these two to a different file.
gulp.task('clean', function () {
	return gulp.src(['app/styles/main.css', 'dist'], { read: false }).pipe($.clean());
});

gulp.task('default', ['clean'], function () {
	gulp.start('build');
});

// These are modified versions of what http://viget.com/extend/gulp-browserify-starter-faq suggests
gulp.task('build', ['html', 'images', 'fonts']);
gulp.task('default', ['build', 'watch', 'serve', 'open']);