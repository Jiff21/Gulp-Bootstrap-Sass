var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('fonts', function () {
	var streamqueue = require('streamqueue');
	return streamqueue({objectMode: true},
		$.bowerFiles(),
		gulp.src('app/fonts/**/*')
	)
		.pipe($.filter('**/*.{eot,svg,ttf,woff}'))
		.pipe($.flatten())
		.pipe(gulp.dest('dist/fonts'))
		.pipe($.size());
});