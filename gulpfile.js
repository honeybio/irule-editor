var gulp      = require('gulp'),
    concat    = require('gulp-concat'),
    del       = require('del'),
    gulpIf    = require('gulp-if'),
    htmlclean = require('gulp-htmlclean'),
    imagemin  = require('gulp-imagemin'),
    jshint    = require('gulp-jshint'),
    nano      = require('gulp-cssnano'),
    uglify    = require('gulp-uglify'),
    useref    = require('gulp-useref');

gulp.task('default', ['images', 'buildweb', 'copyirules', 'copyphp']);

gulp.task('buildweb', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.css', nano()))
    .pipe(gulpIf('*.js', uglify()))
    .pipe(htmlclean())
    .pipe(gulp.dest('dist'))
});

gulp.task('images', function() {
  return gulp.src('app/images/*')
  	.pipe(imagemin())
  	.pipe(gulp.dest('dist/images'));
});

gulp.task('copyirules', function() {
  return gulp.src('app/irules/*')
    .pipe(gulp.dest('dist/irules'));
});

gulp.task('copyphp', function() {
  return gulp.src('app/*.php')
    .pipe(gulp.dest('dist'));
});
