gulp.task('scripts', function () {
	return gulp.src('app/scripts/**/*.js')
		.pipe($.jshint())
		.pipe($.jshint.reporter(require('jshint-stylish')))
		.pipe($.size());
});