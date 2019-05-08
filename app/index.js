const express = require('express')
const request = require('request-promise')
const { version } = require('./package.json')
const app = express()
const port = 3100
const { USERNAME, EXPO_URL } = process.env

app.get('/:number', (req, res) => {
  const {number = 0} = req.params
  console.log(new Date(), 'Received request', number)
  return request(`${EXPO_URL}?number=${number}`)
    .then(result => {
      res.status(200).send(`Hello ${USERNAME}. ${number}^2=${result}`)
    })
    .catch(e => {
      console.log('ERROR', e)
      res.status(500).send('500')
    })
})
app.get('/version', (req, res) => res.send(`Version ${version}`))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))