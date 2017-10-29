var gulp = require('gulp');
connect = require('gulp-connect');
uglify = require('gulp-uglify'),
    minifycss = require('gulp-minify-css'),
    imgmin = require('gulp-imagemin'),
    gutil = require('gulp-util'),
    watchPath = require('gulp-watch-path'),
    combiner = require('stream-combiner2');

gulp.task('myserver', function() {
    connect.server({
        name: 'myserver',
        root: 'gulp',
        livereload: true,
        port: 3000,
        host: "localhost",
        livereload: true
    });
});
gulp.task('loadfiles', function() {
    gulp.src('gulp/**/*.*')
});
gulp.watch('gulp/**/*.*', ['loadfiles']);


gulp.task('default', ['myserver']);