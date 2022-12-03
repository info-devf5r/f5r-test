const { Player } = require('../services/XTREAM')

// initialize player line api
const player = new Player({
  baseUrl: 'http://appcliente.com:8880/',
  // username and password of user line
  auth: {
    username: 'fullip',
    password: 'adgptw'
  }
})

module.exports = player