var gulp = require('gulp');
var run = require('gulp-run');
var browserSync = require('browser-sync');

var syncOption = {
  server: {
    baseDir: './_build/html/'
  }
};

gulp.task('sync', function() {
  browserSync(syncOption);
});

gulp.task('reload', browserSync.reload);

gulp.task('make', function(){
  run("make html").exec();  
});

gulp.task('default', ['sync'], function() {
  gulp.watch(['index.rst', 'src/*.rst'], ['make']);
  gulp.watch(['_build/html/src/*.html'], ['reload']);
});

