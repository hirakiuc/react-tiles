'use strict'

var gulp = require('gulp')
var gutil = require('gulp-util')
var webpack = require('webpack')
var stream = require('webpack-stream')
var webpackConfig = require('./webpack.config.js')
var DevServer = require('webpack-dev-server')
var Promise = require('es6-promise').Promise;
var del = require('del')

gulp.task('build:js', () => {
  var src = './src/containers/Root.js'
  var dst = './dst'

  return gulp.src(src)
    .pipe(stream(webpackConfig))
    .pipe(gulp.dest(dst))
})

gulp.task('build:stylus', () => {
  var src = './src/**/*.styl'
  var dst = './dst'

  return gulp.src(src)
    .pipe(stream(webpackConfig))
    .pipe(gulp.dest(dst))
})

gulp.task('build', ['build:js', 'build:stylus'])

gulp.task('clean', () => {
  del(['dst/*'])
})

gulp.task('server', (callback) => {
  var config = Object.create(webpackConfig)

  new DevServer(webpack(config), {
    publicPath: '/' + config.output.publicPath,
    stats: {
      colors: true
    }
  }).listen(8080, 'localhost', (err) => {
    if (err) throw new gutil.PluginError('webpack-dev-server', err)
    gutil.log('[dev-server]', 'http://localhost:8080/index.html')

    callback()
  })
})

gulp.task('watch', () => {
  gulp.watch(['./src/**/*.js', './src/**/*.styl'], ['build'])
})

gulp.task('default', ['clean', 'build', 'watch', 'server'])
