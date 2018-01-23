const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');

const Cat = require('./models/cat-model.js');

mongoose.connect('mongodb://localhost/mongooseExample');

const app = express();

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', (req, res, next) => {
  res.render('home-view.ejs');
});

app.get('/cats', (req, res, next) => {
  Cat.find((err, catsList) => {
    if (err) {
    res.render('error-view.ejs');
    return;
  }
    res.render('cats-list-view.ejs', { cats: catsList });
  });
});

// app.post('/cats-form', (req,res,next) =>{
//   const theCat = new Cat ({
//     name: req.body.name,
//     color: req.body.color,
//     age: req.body.age
//   });
//   theCat.save((err) => {
//     if (err) {
//       res.send('uh uh uh ');
//       return;
//     }
//     res.redirect('/cats-form');
//   });
// });

app.listen(3000);
