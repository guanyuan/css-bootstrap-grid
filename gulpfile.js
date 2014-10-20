var gulp = require('gulp');
var sass = require('gulp-sass');
var cssbeautify = require('gulp-cssbeautify');
var clean = require('gulp-clean');
var livereload = require('gulp-livereload');
var serve = require('gulp-serve');

var scssFile = './sass/**/*.scss';
var scssFolder = './sass';
var htmlFile = './tooday.html';
var cssFolder = './assets/css';

gulp.task('clean-css', function() {
    gulp.src(cssFolder, {
            read: false
        })
        .pipe(clean());
});

gulp.task('sass', ['clean-css'], function() {
    gulp.src(scssFolder + '/**/*.scss')
        .pipe(sass())
        .pipe(cssbeautify())
        .pipe(gulp.dest(cssFolder))
        .pipe(livereload());
});

gulp.task('html', function() {
    gulp.src(htmlFile, {
            read: false,
        })
    .pipe(livereload());
});

gulp.task('watch', function() {
    gulp.watch(scssFile, ['sass']);
    gulp.watch(htmlFile, ['html']);
});

gulp.task('serve', serve('/Users/yguan/WorkSpace/Exercises/css-bootstrap-grid')); 

gulp.task('default', ['sass', 'watch', 'serve']);
