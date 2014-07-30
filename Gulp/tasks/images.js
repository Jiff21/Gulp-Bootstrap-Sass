var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('images', function () {
	return gulp.src('app/images/**/*')
		.pipe($.cache($.imagemin({
			optimizationLevel: 3,
			progressive: true,
			interlaced: true
		})))
		.pipe(gulp.dest('dist/images'))
		.pipe(reload({stream:true, once:true}))
		.pipe($.size());
});