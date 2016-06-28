var gulp 	    = require('gulp');
var sourcemaps  = require('gulp-sourcemaps');
var source 	    = require('vinyl-source-stream');
var buffer 	    = require('vinyl-buffer');
var browserify  = require('browserify');
var babel 		= require('babelify');
var connect     = require('gulp-connect');
var rimraf 		= require('gulp-rimraf');
var jade 	    = require('gulp-jade');
var stylus 	    = require('gulp-stylus');
var gulpif 	    = require('gulp-if');
var nib 	    = require('nib');
var gutil 	    = require('gulp-util');
var prefix      = require('gulp-autoprefixer');
var uglify      = require('gulp-uglify');
var rename      = require('gulp-rename');
var CSSmin      = require('gulp-minify-css');
var browserSync = require('browser-sync');

var development = process.env.NODE_ENV == 'development';
var production  = process.env.NODE_ENV == 'production';

function handleError( error ){
	gutil.log( error );
	gutil.beep();
	this.emit('end');
};

function clean() {
	return gulp.src('./dist',  { read: false })
		.pipe(rimraf({ force: true }));
}

function copy() {
	return gulp.src('./public/**/*')
		.pipe(gulp.dest('./dist'));
}

function styles(){
	return  gulp.src('./src/stylus/app.styl')
		.pipe(stylus({
			use: nib(),
			linenos: development
		}))
		.on('error', handleError)
		.pipe(prefix('last 2 versions'))
		.pipe(gulpif(production, CSSmin()))
		.pipe(gulpif(production, rename('app.min.css')))
		.pipe(gulpif(!production, gulp.dest('./public/css')))
		.pipe(gulpif(production, gulp.dest('./dist/css')))
		.pipe(gulpif(development, browserSync.stream()));
};

function scripts(){

	var bundler = browserify({
		entries: ['./src/js/app.js'],
		debug: development
	}).transform(['babelify']);

	function rebundle(){

		bundler.bundle()
			.on('error', handleError)
			.pipe(source('bundle.js'))
			.pipe(buffer())
			.pipe(sourcemaps.init({ loadMaps: development }))
			.pipe(gulpif(development, sourcemaps.write('./')))
			.pipe(gulpif(production, uglify()))
			.pipe(gulpif(production, rename('bundle.min.js')))
			.pipe(gulpif(!production, gulp.dest('./public/js')))
			.pipe(gulpif(production, gulp.dest('./dist/js')))
			.pipe(gulpif(development, browserSync.stream()));
	}

	rebundle();
};

function templates(){
	return  gulp.src('./src/jade/*.jade')
		.pipe(jade({
			pretty: development,
			locals: {
				production: production
			}
		}))
		.on('error', handleError)
		.pipe(gulpif(!production, gulp.dest('./public')))
		.pipe(gulpif(production, gulp.dest('./dist')))
		.pipe(gulpif(development, browserSync.stream()));
};

function server(){
	connect.server({
		port: 3000,
		root: './public'
	});
}

function watch(){
	gulp.watch( './src/jade/**/*.jade', [ 'templates' ] );
	gulp.watch( './src/stylus/**/*.styl', [ 'styles' ] );
	gulp.watch( './src/js/**/*.js', [ 'scripts' ] );
};

function sync(){
	browserSync({
		proxy: 'localhost:3000',
		notify: false,
		reloadDelay: 100,
		logLevel: "info",
	})
};

gulp.task('clean', function(){ return clean(); });
gulp.task('copy', ['clean'], function(){ return copy(); });
gulp.task('styles', ['clean'], function(){ return styles(); });
gulp.task('scripts', ['clean'], function(){ return scripts(); });
gulp.task('templates', ['clean'], function(){ return templates(); });
gulp.task('browser-sync', function(){ return sync(); });
gulp.task('watch', function(){ return watch(); });
gulp.task('server', function() { return server(); });

gulp.task('build', [ 'clean', 'copy', 'styles', 'scripts', 'templates' ]);
gulp.task('default', [ 'watch', 'server', 'browser-sync', 'styles', 'scripts', 'templates' ]);
