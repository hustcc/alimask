const gulp = require('gulp');
const injectVersion = require('gulp-inject-version');
const uglify = require('gulp-uglify');
const rename = require("gulp-rename");

gulp.task('build', function() {
  gulp.src('src/alimask.js')
  .pipe(injectVersion())
  .pipe(gulp.dest('dist/'))
  .pipe(uglify({
    preserveComments: 'license'
  }))    //uglify
  .pipe(rename("alimask.min.js"))
  .pipe(gulp.dest('dist/'))
});