module.exports = function (gulp, $, browserSync) {
	gulp.task('concat-css', function () {
		return gulp.src([
				// 'bower_components/font-awesome/css/font-awesome.min.css',
				'node_modules/@fortawesome/fontawesome-free/css/all.min.css',
				'bower_components/aos/dist/aos.css'
			])
			.pipe($.concat('thuvien.css'))
			.pipe(gulp.dest('./dist/css'));
	});
};
