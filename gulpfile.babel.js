'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';

const dirs = {
	src: 'src',
	dest: 'build'
};


gulp.task('default',() => {
	return gulp.src(`${dirs.src}/app.js`)
			.pipe(babel({
				presets: ['es2015']
			}))
			.pipe(gulp.dest(`${dirs.dest}`));
});