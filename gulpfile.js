// Include gulp
var gulp = require('gulp');
var less = require('gulp-sass');
var path = require('path');

gulp.task('sass', function () {
 return gulp.src('scss/*.scss')
   .pipe(less({
     paths: [ path.join(__dirname, 'scss', 'includes') ]
   }))
   .pipe(gulp.dest('css/'));
});

//Watch task
gulp.task('default',function() {
    gulp.watch('scss/*.scss',['sass']);
});