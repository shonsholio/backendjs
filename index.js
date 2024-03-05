const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myconnection = require('express-myconnection');

const app = express();

//IMPORTING ROUTES
const mainRoutes = require('./src/routes/main')

//SETTINGS
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

//MIDDLEWARES
app.use(morgan('dev'));
app.use(myconnection(mysql, {
  host: 'localhost',
  user: 'root',
  password: '',
  port: 3306,
  database: 'jaussers2024'
}, 'single'));
app.use(express.urlencoded({extended:false}));

//ROUTES
app.use('/', mainRoutes);

//STATIC FILEs
app.use(express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
  console.log('SERVER ON PORT 3000')
});