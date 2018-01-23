const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/mongooseExample');

//need to make a model for each collection that you want to interact with
//you should probably create a db that is in singular

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



//Collection is going to turn Cat -> cats (db.cats.find(), etc) it creates the Collection
//Fields: name (type String) pretty much says what fields the collection could have and creates a model/template for these fields so cats needs to be strings

//CREATE this is something that would be in a form submission... part of the routes
const kitty = new Cat( {
  name: 'Mr. Nibbles the Boss' ,
  age: 1,
  color: 'golden',
  isFed: true,
  favoriteToys: ['shoelaces', 'chocolate'],
  birthday: new Date(2016, 3, 22)

});

kitty.save((err) => {
  if (err) {
    console.log('OH LAWWWWD');
  } else {
    console.log('THATS WHAT IM TALKING ABOUT ---Successful save into the database bruh');
  }
});

const kitty2 = new Cat( {
  name: 'Godfather Cat' ,
  age: 109,
  color: 'silver',
  isFed: true,
  favoriteToys: ['oranges', 'spaghetti'],
  birthday: new Date(1908, 3, 22)

});

kitty2.save((err) => {
  if (err) {
    console.log('OH LAWWWWD--couldn\'t make a new cat ');
  } else {
    console.log('THATS WHAT IM TALKING ABOUT ---Successful save into the database bruh');
  }
});

const kitty3 = new Cat( {
  name: 'Disco Cat' ,
  age: 77,
  color: 'platinum',
  isFed: true,
  favoriteToys: ['Disco Balls', 'Bell Bottoms'],
  birthday: new Date(1946, 3, 22)

});

kitty3.save((err) => {
  if (err) {
    console.log('OH --couldn\'t make a Disco cat ');
  } else {
    console.log('THATS WHAT IM TALKING ABOUT ---Successful save into the database bruh');
  }
});



//READ
// this is like doing a db.cats.find();
//first argument error, the second is the data you asked for... probably an array of documents
//third argument that the find could receive is a call back



Cat.find(
  { name: 'Mr. Bigglesworth' },
  { name: 1, _id: 0},
  (err, catsList) => {
    if (err) {
    console.log('Oh no couldn\'t find it');
    return;
  }

  catsList.forEach((oneCat) => {
    console.log(` ---> cat: ${oneCat.name} ${oneCat._id}`);
  });
});
