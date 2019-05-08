const express = require('express')
const { version } = require('./package.json')
const app = express()
const port = 3100

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/version', (req, res) => res.send(`Version ${version}`))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))