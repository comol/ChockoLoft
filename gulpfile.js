var gulp          = require('gulp'),
	sass          = require('gulp-sass'),
	browsersync   = require('browser-sync'),
	concat        = require('gulp-concat'),
	uglify        = require('gulp-uglify-es').default,
	cleancss      = require('gulp-clean-css'),
	rename        = require('gulp-rename'),
	autoprefixer  = require('gulp-autoprefixer'),
	notify        = require("gulp-notify"),
	rsync         = require('gulp-rsync'),
	wait	      = require('gulp-wait'),
	sourcemaps    = require('gulp-sourcemaps');

gulp.task('browser-sync', function() {
	browsersync({
		server: {
			baseDir: 'app'
		},
		notify: false,
		open: true,
		// tunnel: true,
		// tunnel: "projectname", //Demonstration page: http://projectname.localtunnel.me
	})
});

gulp.task('styles', function() {
	return gulp.src('app/scss/*.scss')
	.pipe(wait(1500))
	.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(sass({ outputStyle: 'expand' }).on("error", notify.onError()))
		// .pipe(rename({ suffix: '.min', prefix : '' }))
		// .pipe(autoprefixer(['last 15 versions']))
		// .pipe(cleancss( {level: { 1: { specialComments: 0 } } })) // Opt., comment out when debugging
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('app/css'))
	.pipe(browsersync.reload( {stream: true} ))
});

gulp.task('js', function() {
	return gulp.src([
		'app/js/module.js', // Always at the end
		])
	.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(concat('app.min.js'))
		// .pipe(uglify()) // Mifify js (opt.)
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('app/js'))
	.pipe(browsersync.reload({ stream: true }))
});

gulp.task('rsync', function() {
	return gulp.src('app/**')
	.pipe(rsync({
		root: 'app/',
		hostname: 'username@yousite.com',
		destination: 'yousite/public_html/',
		exclude: ['**/Thumbs.db', '**/*.DS_Store'], // Excludes files from deploy
		recursive: true,
		archive: true,
		silent: false,
		compress: true
	}))
});



gulp.task('watch', function() {
	gulp.watch('app/scss/**/*.scss', gulp.series('styles'));
	gulp.watch(['libs/**/*.js', 'app/js/module.js'], gulp.series('js'));
	gulp.watch('app/*.html').on('change', browsersync.reload);
});

gulp.task('default', gulp.parallel('watch', 'browser-sync'));