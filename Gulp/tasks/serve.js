var gulp = require('gulp');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('serve', ['styles'], function () {
	browserSync.init(null, {
		server: {
			baseDir: 'app',
			directory: true
		},
		debugInfo: false,
		open: false,
		hostnameSuffix: ".xip.io"
	}, function (err, bs) {
		require('opn')(bs.options.get('urls').get('local'));
		console.log('Started connect web server on ' + bs.options.url);
	});
});