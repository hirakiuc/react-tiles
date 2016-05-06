'use strict'

import DevServer from 'webpack-dev-server'
import Promise from 'es6-promise'
import del from 'del'
import eslint from 'gulp-eslint'
import gulp from 'gulp'
import gutil from 'gulp-util'
import imagemin from 'gulp-imagemin'
import stream from 'webpack-stream'
import webpack from 'webpack'

import devConfig     from './config/dev.config.js'
import releaseConfig from './config/release.config.js'

gulp.task('build:js', () => {
  const src = './src/**/*.js'
  const dst = './lib'

  return gulp.src(src)
    .pipe(stream(releaseConfig))
    .pipe(gulp.dest(dst))
})

gulp.task('build:stylus', () => {
  const src = './stylus/**/*.styl'
  const dst = './lib'

  return gulp.src(src)
    .pipe(stream(releaseConfig))
    .pipe(gulp.dest(dst))
})

gulp.task('build:svg', () => {
  const src = './images/**/*.svg'
  const dst = './lib'

  const options = {
    optimizationLevel: 7
  }

  return gulp.src(src)
    .pipe(imagemin(options))
    .pipe(gulp.dest(dst))
})

// Build release files
gulp.task('build', ['build:js', 'build:stylus', 'build:svg'])

// Build dev files
gulp.task('build:dev', () => {
  const src = './examples/Root.js'
  const dst = './examples'

  return gulp.src(src)
    .pipe(stream(devConfig))
    .pipe(gulp.dest(dst))
})


gulp.task('clean', () => {
  del(['lib/*', 'examples/main.js', 'examples/main.js.map'])
})

gulp.task('server', (callback) => {
  const config = Object.create(devConfig)

  new DevServer(webpack(config), {
    contentBase: './examples',
    stats: { colors: true }
  }).listen(8080, 'localhost', (err) => {
    if (err) throw new gutil.PluginError('webpack-dev-server', err)

    gutil.log('[dev-server]', 'http://localhost:8080/index.html')
    callback()
  })
})

gulp.task('watch', () => {
  gulp.watch([
    './src/**/*.js', '/examples/Root.js',
    './stylus/**/*.styl', './images/**/*'
  ], ['build:dev'])
})

gulp.task('lint', () => {
  return gulp.src([
    'src/**/*.js',
    'examples/Root.js',
    '!node_modules/**'
  ])
  .pipe(eslint())
  .pipe(eslint.format())
  .pipe(eslint.failAfterError())
})

gulp.task('default', ['clean', 'build:dev', 'watch', 'server'])
