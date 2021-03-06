var gulp = require('gulp');
var gutil = require('gulp-util');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');

var jsFiles = 'Frontend/app/scripts/**/*.js',
    cssFiles = 'Frontend/app/styles/*.css',
    jsDest = 'Frontend/dist/scripts',
    cssDest = 'Frontend/dist/styles';

gulp.task('clean', function() {
    return gulp
        .src(jsDest, {
            read: false
        })
        .pipe(clean());
});

gulp.task('scripts', function() {
    return gulp
        .src(jsFiles)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest))
        .on('error', gutil.log);
});

gulp.task('cleanCSS', function() {
    return gulp
        .src(cssFiles)
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest(cssDest))
        .on('error', gutil.log);
});