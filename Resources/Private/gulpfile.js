/* jshint node: true */
'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var debug = getArg('--debug');
var rename = require('gulp-rename');

// SCSS zu css
gulp.task('css', function() {
	var config = {};
	if (debug) {
		config.sourceMap = 'inline';
		config.sourceMapEmbed = true;
	} else {
		config.outputStyle = 'compressed';
	}
	return gulp.src('Sass/*.scss')
			.pipe(plumber())
			.pipe(sass(config))
			.pipe(rename({
				suffix: '.min'
			}))
			.pipe(gulp.dest('../Public/Css'));
});

/*********************************
 *
 *         Watch Tasks
 *
 *********************************/

gulp.task('watch', function() {
	gulp.watch('Sass/**/*.scss', ['css']);
});

gulp.task('default', ['css', 'watch']);

/**
 * Get arguments from commandline
 */
function getArg(key) {
	var index = process.argv.indexOf(key);
	var next = process.argv[index + 1];
	return (0 > index) ? null : (!next || '-' === next[0]) ? true : next;
}
