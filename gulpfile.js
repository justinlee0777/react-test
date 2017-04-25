var gulp = require('gulp'),
	pump = require('pump'),
	del = require('del'),
	plugins = require('gulp-load-plugins')();

gulp.task('compile-and-bundle', compileAndBundle);
gulp.task('move-assets', moveAssets);
gulp.task('dist', ['compile-and-bundle', 'move-assets'], clean);
gulp.task('serve', ['dist'], createServer);

function compileAndBundle(cb) {
	pump([
		gulp.src('src/index.js'),
		plugins.babel({
			presets: ['es2015', 'react']
		}),
		gulp.dest('tmp'),
		plugins.webpack(),
		plugins.rename({
			basename: 'bundle',
			extname: '.js'
		}),
		gulp.dest('dist'),
		], cb);
}

function moveAssets() {
	pump([
		gulp.src(['src/*', '!src/index.js']),
		gulp.dest('dist')
		]);
}

function createServer() {
	pump([
		gulp.src( 'dist' ),
		plugins.webserver({
			port: 3000,
			root: ['dist'],
			livereload: true,
			open: true
		})
	]);
}

function clean() {
	del('tmp');
}