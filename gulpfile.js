var gulp      = require('gulp'),
    concat    = require('gulp-concat'),
    del       = require('del'),
    gulpIf    = require('gulp-if'),
    imagemin  = require('gulp-imagemin'),
    jshint    = require('gulp-jshint'),
    nano      = require('gulp-cssnano'),
    uglify    = require('gulp-uglify'),
    useref    = require('gulp-useref'),
    htmlmin   = require('gulp-htmlmin');

gulp.task('default', ['images', 'buildweb']);

gulp.task('buildweb', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.css', nano()))
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulp.dest('dist'))
});

gulp.task('images', function() {
  return gulp.src('app/images/*')
  		.pipe(imagemin())
  		.pipe(gulp.dest('dist/images'));
});
