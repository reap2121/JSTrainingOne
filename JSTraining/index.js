const express = require('express')
var path = require('path')
const app = express()
const port = 3000

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../views'));
app.use(express.static(__dirname + '/../resources'));
app.get('/', (req, res) => res.render('page', {
    title: 'anyád'
}))

const server = app.listen(port, () => {
    console.log(`Express running → PORT ${server.address().port}`)
});