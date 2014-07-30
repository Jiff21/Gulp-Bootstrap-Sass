var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('watch', ['serve'], function () {

	// watch for changes
	gulp.watch(['app/*.html'], reload);
	gulp.watch(['app/views/*.html'], reload);

	gulp.watch('app/styles/**/*.scss', ['styles']);
	gulp.watch('app/scripts/**/*.js', ['scripts']);
	gulp.watch('app/images/**/*', ['images']);
	gulp.watch('bower.json', ['wiredep']);
});