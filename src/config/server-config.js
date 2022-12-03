const express = require('express')
const app = express()
const port = process.env.PORT || 3080

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app