var gulp = require('gulp');

gulp.task('default', [], function() {
  gulp.src("public/style.css")
      .pipe(gulp.dest('../layercake_resources/public/src/css'));
});