var gulp = require('gulp');
//var jshint = require('gulp-jshint');
//var jscs = require('gulp-jscs');
var browserSync = require('browser-sync');
var reload = browserSync.reload;
var config = {
  client: 'localhost:3136/Index.html',
  port:'3136'
}

gulp.task('default', function () {
  console.log('Gulp Starting');
  startBrowserSync();


});
// watch files for changes and reload

function startBrowserSync() {
  if (browserSync.active) {
    return;
  }

  console.log('Starting Browser-Sync from: ' + config.client);
  var options = {
    proxy: config.client,
    port: config.port,
    files: ['**/*.*'],
    injectChanges: true,
    reloadDelay: 1000
  } 
  browserSync(options);
}