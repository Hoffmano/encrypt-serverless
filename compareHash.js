const bcrypt = require('bcrypt')
const Promise = require('bluebird')

Promise.promisifyAll(bcrypt)

module.exports.compareHash = async (event) =>  bcrypt.compare(event.password, event.hash)
