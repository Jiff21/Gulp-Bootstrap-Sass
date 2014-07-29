var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('styles', function () {
	return gulp.src('app/styles/main.scss')
		.pipe($.sass({errLogToConsole: true}))
		.pipe($.autoprefixer('last 1 version'))
		.pipe(gulp.dest('app/styles'))
		.pipe(reload({stream:true}))
		.pipe($.size())
		.pipe($.notify("Compilation complete."));
});