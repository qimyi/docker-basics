const express = require('express')
const { version } = require('./package.json')
const app = express()
const port = 3100
const { USERNAME } = process.env

app.get('/', (req, res) => {
  console.log(new Date(), 'Received request')
  res.send(`Hello ${USERNAME}`)
})
app.get('/version', (req, res) => res.send(`Version ${version}`))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))