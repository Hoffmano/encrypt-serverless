'use strict';

const bcrypt = require('bcrypt')
const Promise = require('bluebird')

Promise.promisifyAll(bcrypt)

const saltRounds = 10

module.exports.encrypt = async (event, context) => bcrypt.hashAsync(event.password, saltRounds)
