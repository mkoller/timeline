var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
// Call browserSync 
var browserSync = require('browser-sync').create();


// gulp watch
gulp.task('watch', ['browserSync', 'sass'], function (){
  gulp.watch('scss/**/*.scss', ['sass']); 
  // Other watchers
})

// gulp sass task
gulp.task('sass', function(){
  return gulp.src('scss/style.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Browsersync task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
  })
})