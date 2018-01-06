const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  date: { type: Date }
});

const Articles = mongoose.model("Articles", articleSchema);

module.exports = mongoose.model('User',{
	id: String,
	username: String,
	password: String,
	email: String,
	firstName: String,
	lastName: String
});

module.exports = Articles;
