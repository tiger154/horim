/**
 * Queeraz js & css gulp task
 * Now we do front css/js only for now.
 * @type {exports}
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');

// js
gulp.task('js-theme-photographer', function() {
    return gulp.src('src/js/app.js')
        .pipe(gulp.dest('wp/wp-content/themes/jeonhwanphotographer/assets/js'))
});
//css
gulp.task('css-theme-photographer', function () {
    return gulp.src('src/scss/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('wp/wp-content/themes/jeonhwanphotographer/assets/css'))
});
// fonts
gulp.task('fonts-fontawsome-theme-photographer', function() {
    return gulp.src('node_modules/font-awesome/fonts/*')
        .pipe(gulp.dest('wp/wp-content/themes/jeonhwanphotographer/assets/fonts'))
});
gulp.task('fonts-bootstrap-theme-photographer', function() {
    return gulp.src('node_modules/bootstrap-sass/assets/fonts/bootstrap/*')
        .pipe(gulp.dest('wp/wp-content/themes/jeonhwanphotographer/assets/fonts/bootstrap'))
});