import gulp from 'gulp';
import sass from 'gulp-ruby-sass';
import sourcemaps from 'gulp-sourcemaps';
import nodemon from 'gulp-nodemon';
//var browserSync = require('browser-sync').create();

gulp.task('nodemon', (cb) => {
	return nodemon({
		script: './bootstrap.js',
		ignore: ['./client'],
		ext: 'js',
		env: { 'NODE_ENV':'development' }
	}).once('start', cb);

});

gulp.task('sass', () => {
	return sass('client/app/sass/app.scss', {
		sourcemap: true,
		style: 'compressed'
	})
	.on('error', (err) => {
		console.log('Error!!!', err.message);

	})
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('client/app/styles'));

});

gulp.task('watch', () => {
  gulp.watch(['client/app/sass/**/*'], ['sass']);
});

gulp.task('default', ['sass', 'watch', 'nodemon']);