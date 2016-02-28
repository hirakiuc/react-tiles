'use strict'

var gulp = require('gulp')
var webpack = require('webpack-stream')
var webpackConfig = require('./webpack.config.js')
var Promise = require('es6-promise').Promise;
var del = require('del')

gulp.task('build:js', () => {
  var src = './src/containers/Root.js'
  var dst = './dst'

  return gulp.src(src)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(dst))
})

gulp.task('build:stylus', () => {
  var src = './src/**/*.styl'
  var dst = './dst'

  return gulp.src(src)
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(dst))
})

gulp.task('build', ['build:js', 'build:stylus'])

gulp.task('clean', () => {
  del(['dst/*'])
})

gulp.task('watch', () => {
  gulp.watch(['./src/**/*.js', './src/**/*.styl'], ['build'])
})

gulp.task('default', ['clean', 'build', 'watch'])
