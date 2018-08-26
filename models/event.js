const mongoose = require('mongoose')
const Schema = mongoose.Schema

let Event = new Schema({
	name: String,
	description: String,
	location: String
})

module.exports = mongoose.model('Event', Event)
