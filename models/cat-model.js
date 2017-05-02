const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const catSchema = new Schema({
  name: String,
  age: Number,
  color: String,
  isFed: Boolean,
  favoriteToys: Array,
  birthday: Date
});

const Cat = mongoose.model('Cat', catSchema );
//name of the model for mongoose to keep track of
 //SCHEMA of the model, is the structure that the docs will have

mode.exports = Cat;
