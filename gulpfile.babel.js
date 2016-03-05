'use strict'

import gulp from 'gulp'
import gutil from 'gulp-util'
import webpack from 'webpack'
import stream from 'webpack-stream'
import webpackConfig from './webpack.config.js'
import DevServer from 'webpack-dev-server'
import Promise from 'es6-promise'
import del from 'del'
import imagemin from 'gulp-imagemin'

gulp.task('build:js', () => {
  const src = './src/containers/Root.js'
  const dst = './dst'

  return gulp.src(src)
    .pipe(stream(webpackConfig))
    .pipe(gulp.dest(dst))
})

gulp.task('build:stylus', () => {
  const src = './src/**/*.styl'
  const dst = './dst'

  return gulp.src(src)
    .pipe(stream(webpackConfig))
    .pipe(gulp.dest(dst))
})

gulp.task('build:svg', () => {
  const src = './images/**/*.svg'
  const dst = './dst'

  const options = {
    optimizationLevel: 7
  }

  return gulp.src(src)
    .pipe(imagemin(options))
    .pipe(gulp.dest(dst))
})

gulp.task('build', ['build:js', 'build:stylus', 'build:svg'])

gulp.task('clean', () => {
  del(['dst/*'])
})

gulp.task('server', (callback) => {
  const config = Object.create(webpackConfig)

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
  gulp.watch(['./src/**/*.js', './src/**/*.styl', './images/**/*'], ['build'])
})

gulp.task('default', ['clean', 'build', 'watch', 'server'])
