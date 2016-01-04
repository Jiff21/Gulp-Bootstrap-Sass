var gulp = require('gulp');
var bs = require('browser-sync');
var reload = bs.reload;

gulp.task('serve', ['styles'], function () {
	bs.init(null, {
		server: {
			baseDir: ['./app', './dist'],
			// set to true to browse directory instead of load index.
			directory: false,
			index: "index.html"
		},
		debugInfo: false,
		open: false,
		// hostnameSuffix: ".xip.io"
	}, function (err, bs) {
		require('opn')(bs.options.get('urls').get('local'));
		console.log('Started connect web server on ' + bs.options.url);
	});
});