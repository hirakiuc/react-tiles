'use strict'

import DevServer from 'webpack-dev-server'
import Promise from 'es6-promise'
import del from 'del'
import eslint from 'gulp-eslint'
import gulp from 'gulp'
import gutil from 'gulp-util'
import stream from 'webpack-stream'
import webpack from 'webpack'

import devConfig     from './config/dev.config.js'
import testConfig    from './config/test.config.js'
import releaseConfig from './config/release.config.js'

// TODO: fork https://github.com/Dakuan/gulp-jest
import jest from './config/gulp-jest.js'

// Build release files
gulp.task('build:dist', () => {
  const src = './src/**/*.js'
  const dst = './lib'

  return gulp.src(src)
    .pipe(stream(releaseConfig))
    .pipe(gulp.dest(dst))
})
gulp.task('build', ['build:dist'])

// Build dev files
gulp.task('build:dev', () => {
  const src = './examples/Root.js'
  const dst = './examples'

  return gulp.src(src)
    .pipe(stream(devConfig))
    .pipe(gulp.dest(dst))
})

// Clean tasks
gulp.task('clean:dist', () => {
  del(['lib/*'])
})
gulp.task('clean:dev', () => {
  del(['examples/main.js', 'examples/main.js.map'])
})
gulp.task('clean', ['clean:dev', 'clean:dist'])

// test task
gulp.task('test', () => {
  const src = './__tests__/'

  return gulp.src(src)
    .pipe(jest(testConfig))
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

gulp.task('default', ['clean:dev', 'build:dev', 'watch', 'server'])
