'use strict'

import jest from 'jest-cli'
import gutil from 'gulp-util'
import through from 'through2'


module.exports = (options) => {
  options = options || {}

  return through.obj( (file, enc, cb) => {
    options.rootDir = options.rootDir || file.path

    const onComplete = (success) => {
      if (!success) {
        cb(new gutil.PluginError('gulp-jest', { message: 'Test Failed'}))
      } else {
        cb()
      }
    }

    jest.runCLI({ config: options }, options.rootDir, onComplete)
  })
}
