const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const { DATABASE_URL, PORT } = require('./constants')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

mongoose.connect(DATABASE_URL, err => {
  if (err) {
    console.log(err)
  }
  console.log('MongoDB started!')
})

const router = express.Router()

app.use(require('./routes'))

app.get('/', (req, res) => {
	res.render('index', { message: 'Hello Pug!' })
})

app.listen(PORT, function() {
  console.log(`App is running at port ${PORT}`)
})
