'use strict'
const chalk = require('chalk')

function log(msg, label, needoutput) {
  if(!global.disableSaoLog || needoutput){
    console.log(label, msg)
  }
}

exports.success = function(msg) {
  log(msg, chalk.green('success'))
}

exports.error = function(msg) {
  log(msg, chalk.red('error'), true)
}

exports.warn = function(msg) {
  log(msg, chalk.yellow('warning'))
}

exports.info = function(msg) {
  log(msg, chalk.cyan('info'))
}
