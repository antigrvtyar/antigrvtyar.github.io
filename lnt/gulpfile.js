const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()
const useref = require('gulp-useref')
const autoprefixer = require('gulp-autoprefixer')
const minify = require('gulp-minify')
const javascriptObfuscator = require('gulp-javascript-obfuscator')
const gulpif = require('gulp-if')
const csso = require('gulp-csso')
const del = require("del")

gulp.task('sass', function () {   
  return gulp.src('./src/scss/main.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./src/css'))
})

gulp.task('scripts', function() {
  return gulp.src(['./src/js/*.js'])
    .pipe(javascriptObfuscator())
    .pipe(minify())
    .pipe(gulp.dest('./dist'))
});

gulp.task('watch', function () {
  gulp.watch('./src/scss/**/*.scss', gulp.series('sass', 'reload'));
  gulp.watch('./src/**/*.{html,js,css}', gulp.series('reload'));
});

gulp.task('serve', function () {
  browserSync.init({
      server: './src'
  });
});

gulp.task('reload', function (done) {
  browserSync.reload();
  done();
});

gulp.task('assets', function () {
  gulp.src('./src/css/**/*')
      .pipe(gulp.dest('./dist/css'));
  return gulp.src('./src/assets/**/*')
      .pipe(gulp.dest('./dist/assets'));
});

gulp.task('clean', function () {
  return del("./dist")
})

gulp.task('useref', function () {
  gulp.src('./src/*.html')
      .pipe(useref())
      .pipe(gulpif(['**/*.js', '!**/*.min.js'], javascriptObfuscator(), minify()))
      .pipe(gulpif('*.css', csso()))
      .pipe(gulp.dest('dist'))
  return del("./dist/js/main.min.js")
})

gulp.task('default', gulp.parallel('serve', 'watch'));
gulp.task('build', gulp.series('clean','useref', 'assets'));