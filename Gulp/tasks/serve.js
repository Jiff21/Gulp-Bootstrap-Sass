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
		require('opn')(bs.options.url);
		console.log('Started connect web server on ' + bs.options.url);
	});
});