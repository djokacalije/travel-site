var gulp = require('gulp');
var postCss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssVars = require('postcss-simple-vars');
var cssNested = require('postcss-nested');
var postCssImport = require('postcss-import');
var mixins = require('postcss-mixins');

gulp.task('styles',function(){
    return  gulp.src('./app/assets/styles/style.css')
    .pipe(postCss([mixins,postCssImport,cssNested,cssVars,autoprefixer]))
    .on('error',function(errorInfo){
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/styles'));
  });