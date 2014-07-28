gulp.task('watch', ['serve'], function () {

	// watch for changes
	gulp.watch(['app/*.html'], reload);

	gulp.watch('app/styles/**/*.scss', ['styles']);
	gulp.watch('app/scripts/**/*.js', ['scripts']);
	gulp.watch('app/images/**/*', ['images']);
	gulp.watch('bower.json', ['wiredep']);
});