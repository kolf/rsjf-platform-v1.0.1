var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	minifyHTML = require('gulp-htmlmin'),
	csso = require('gulp-csso'),
	gulpif = require('gulp-if'),
	concat = require('gulp-concat'),
	deleteFile = require('del'),
	gzip = require('gulp-zip'),
	browserSync = require('browser-sync').create(),
	revall = new(require('gulp-rev-all'))({
		dontRenameFile: [/^\/index\.html$/, /^\/404\.html$/],
		dontSearchFile: [/^\/lib\/js\/angular\/.*/g, /^\/lib\/js\/require\/.*/g],
		transformFilename: function(file, hash) {
			return hash + file.path.slice(file.path.lastIndexOf('.'));
		}
	});

gulp.task('build', ['script', 'style', 'font', 'requirejs'], function() {
	deleteFile(['dist']);
	return gulp.src(['app/**'])
		.pipe(revall.revision())
		.pipe(gulpif('*.html', minifyHTML({
			removeComments: true,
			collapseWhitespace: true
		})))
		.pipe(gulpif('*.js', uglify()))
		.pipe(gulpif('*.css', csso()))
		.pipe(gulp.dest('./dist'))
		.pipe(gzip('dist.zip'))
		.pipe(gulp.dest('./'));
});


gulp.task('dev', ['script', 'style', 'font'], function() {
	browserSync.init({
		server: 'app'
	});

	gulp.watch("app/**/*.{js,css,html}").on('change', browserSync.reload);
});


gulp.task('script', function() {
	gulp.src([
			'node_modules/angular/angular.js',
			'node_modules/angular-animate/angular-animate.js',
			'node_modules/angular-ui-router/release/angular-ui-router.js',
			'node_modules/angular-validation/dist/angular-validation.js',
			'node_modules/angular-validation/dist/angular-validation-rule.js',
			'node_modules/angular-toastr/dist/angular-toastr.js',
			'node_modules/angular-toastr/dist/angular-toastr.tpls.js',
			'node_modules/angular-strap/dist/angular-strap.js',
			'node_modules/angular-strap/dist/angular-strap.tpl.js'
			// 'node_modules/requirejs/require.js',
			// 'node_modules/require-css/css.js'
		])
		// .pipe(concat('angular.js'))
		.pipe(gulp.dest('app/lib/js/angular'));

	gulp.src([
			'node_modules/requirejs/require.js',
			'node_modules/require-css/css.js'
		])
		.pipe(gulp.dest('app/lib/js/require'))
});

gulp.task('style', function() {
	return gulp.src([
			'app/assets/css/bootstrap.css',
			'node_modules/font-awesome/css/font-awesome.css',
			'node_modules/angular-toastr/dist/angular-toastr.css'
		])
		.pipe(concat('lib.css'))
		.pipe(gulp.dest('app/lib/css'));
});

gulp.task('font', function() {
	return gulp.src([
			'node_modules/font-awesome/fonts/**'
		])
		.pipe(gulp.dest('app/lib/fonts'));
})

gulp.task('requirejs', function(done) {
	var r = require('requirejs');
	r.optimize({
		appDir: 'app',
		baseUrl: './',
		dir: 'dist',
		optimize: 'none',
		optimizeCss: 'none',
		removeCombined: true,
		mainConfigFile: 'app/bootstrap.js',
		modules: [{
			name: "bootstrap"
		}],
		logLevel: 1
	}, function() {
		done();
	});
})