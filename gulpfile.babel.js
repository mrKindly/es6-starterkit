'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import sourcemaps from 'gulp-sourcemaps';

const dirs = {
	src: 'src',
	dest: 'build'
};


gulp.task('default',() => {
	return gulp.src(`${dirs.src}/app.js`)
			.pipe(sourcemaps.init())
			.pipe(babel({
				presets: ['es2015']
			}))
			.pipe(sourcemaps.write('.'))
			.pipe(gulp.dest(`${dirs.dest}`));
});