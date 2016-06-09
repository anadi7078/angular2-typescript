// Less configuration
var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

gulp.task('less', function() {
    gulp.src('*.less')
        .pipe(less())
        .pipe(gulp.dest(function(f) {
            return f.base;
        }))
});
 
var tsProject = ts.createProject('tsconfig.json');
gulp.task('ts-compile', function () {
    var tsResult = tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject));


    return tsResult.js
        .pipe(sourcemaps.write('/'))
        .pipe(gulp.dest(function(f) {
            return f.base;
        }));
});

gulp.task('default', ['ts-compile', 'less']);