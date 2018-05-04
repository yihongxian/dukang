
var chalk = require('chalk');
var shell = require('shelljs');
var script = process.argv[2];

var package = require('../../package.json');

var log = console.log;




exports.command = 'init <type>';
exports.desc = 'DuKang init project';
exports.handler = function (argv) {
  switch (argv.type) {
    case 'react':

      break;
    case 'h5':
      break;
    case 'h5':
      break; 
    default:
      break;
  }
}
