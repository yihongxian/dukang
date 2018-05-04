#!/usr/bin/env node
require('yargs')
  .usage('Usage: dukang [options]')
  .commandDir('../lib/cmds')
  .alias('h', 'help')
  .alias('v', 'version')
  .argv;
