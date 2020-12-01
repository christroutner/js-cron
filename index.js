/*
  This is a boilerplate for creating a JS-based cron job. It uses the cron
  npm library to set up a cron job. It uses shelljs npm library to execute
  shell scripts.
*/

/* eslint-disable no-async-promise-executor */

'use strict'

// Public npm libraries
const CronJob = require('cron').CronJob
const shell = require('shelljs')

// Local libraries
const Util = require('./lib/util')
const util = new Util()

let _this // local global for 'this'.

class MyCron {
  constructor () {
    _this = this

    _this.util = util
    _this.shell = shell
  }

  async startJob () {
    return new CronJob(
      '* * * * * *', // Execute every second.
      function () {
        _this.shell.exec('./example-shell-script.sh')
      },
      null,
      true,
      'America/Los_Angeles'
    )
  }
}

// Start the cron job.
const myCron = new MyCron()
myCron.startJob()
