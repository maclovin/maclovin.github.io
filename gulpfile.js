var gulp = require('gulp'),
		sass = require('gulp-sass'),
		minify = require('gulp-minify-css'),
		uglify = require('gulp-uglify'),
		server = require('gulp-server-livereload'),
		concat = require('gulp-concat');

gulp.task('default', function() {
	var cssWatcher = gulp.watch('./assets/css/**/*.sass'),
			jsWatcher = gulp.watch('./assets/js/**/*.js');

  cssWatcher.on('change', function(event) {
		console.log('File ' + event.path + ' was ' + event.type);

		gulp.src('./assets/css/main.sass')
			.pipe(sass({indentedSyntax: true}))
			.pipe(minify())
			.pipe(gulp.dest('./dist/'));
	});

	jsWatcher.on('change', function(event) {
		console.log('Compiling scripts...')

		gulp.src(['./assets/js/libs/jquery.min.js', './assets/js/app.js'])
			.pipe(concat('main.js'))
			.pipe(uglify())
			.pipe(gulp.dest('./dist/'));

	});

	gulp.src('./')
		.pipe(server({
			livereload: true,
			defaultFile: 'index.html',
			open: true}));
});
