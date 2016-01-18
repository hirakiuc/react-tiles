'use strict'

var gulp = require('gulp')
var webpack = require('webpack-stream')
var webpackConfig = require('./webpack.config.js')

gulp.task('build:js', () => {
  var src = './src/containers/Root.js'
  var dst = './dst'

  return gulp.src(src)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(dst))
})

gulp.task('default', ['build:js'], () => {
  gulp.watch(['./src/**/*.js'], ['build:js'])
})
