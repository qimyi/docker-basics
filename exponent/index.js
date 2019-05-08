const express = require('express')
const { version } = require('./package.json')
const app = express()
const { PORT = 3200 } = process.env

app.get('/', (req, res) => {
  let number
  try {
    number = parseInt(req.query && req.query.number, 10)
    res.send((number*number).toString())
  } catch (e) {
    console.log('Number:', number)
  }
})
app.get('/version', (req, res) => res.send(`Version ${version}`))

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))