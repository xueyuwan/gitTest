var gulp = require('gulp');
connect = require('gulp-connect');
uglify = require('gulp-uglify'),
    minifycss = require('gulp-minify-css'),
    imgmin = require('gulp-imagemin'),
    gutil = require('gulp-util'),
    watchPath = require('gulp-watch-path'),
    combiner = require('stream-combiner2');

gulp.task('webserver', function() {
    connect.server({
        root: './src/index.html',
        livereload: true,
        port: 3000
    });
});

//代码着色与显示错误日志方法，这个方法用到了gulp-util和stream-combiner2插件
var handleError = function(err) {
    console.log('\n');
    gutil.log('fileName: ' + gutil.colors.red(err.fileName));
    gutil.log('lineNumber: ' + gutil.colors.red(err.lineNumber));
    gutil.log('message: ' + err.message);
    gutil.log('plugin: ' + gutil.colors.yellow(err.plugin));
};
//js批量压缩任务
gulp.task('script', function() { //script时自定义的  
    //将文件的源路径和发布路径赋值给相应变量  
    var srcJsPath = 'js/*.js';
    var destJsPath = 'dist/js/';
    var combined = combiner.obj([
        gulp.src(srcJsPath), //获取文件源地址  
        uglify(), //执行压缩  
        gulp.dest(destJsPath) //将压缩的文件发布到新路径  
    ]);
    combined.on('error', handleError); //打印错误日志  
});
//



gulp.task('default', ['webserver']);