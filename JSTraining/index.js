const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

const server = app.listen(port, () => {
    console.log(`Express running → PORT ${server.address().port}`)
});