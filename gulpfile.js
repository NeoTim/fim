'use strict';

var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('default', ['compile',  'watch']);

gulp.task('compile', function() {
  return gulp.src('./src/index.js')
    .pipe(babel({ presets: ['es2015'] }))
    .pipe(gulp.dest(process.cwd()));
});

gulp.task('watch', function() {
  gulp.watch(['./src/**/*.js'], ['compile']);
});
