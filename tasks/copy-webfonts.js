module.exports = function (gulp, $, browserSync) {
	gulp.task('copy-webfonts', function () {
		return gulp.src([
			'./src/webfonts/**.*',
			'node_modules/@fortawesome/fontawesome-free/css/all.min.css'
			])
			.pipe(gulp.dest('./dist/webfonts'));
	});
};
