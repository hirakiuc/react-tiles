'use strict'

var gulp = require('gulp')
var webpack = require('webpack-stream')

gulp.task('build:js', () => {
  var src = './src/containers/Root.js'
  var dst = './dst'

  var config = {
    output: {
      filename: '[name].js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            cacheDirectory: true,
            presets: ['es2015', 'react']
          }
        }
      ]
    }
  }

  return gulp.src(src)
    .pipe(webpack(config))
    .pipe(gulp.dest(dst))
})

gulp.task('default', ['build:js'], () => {
  gulp.watch(['./src/**/*.js'], ['build:js'])
})
