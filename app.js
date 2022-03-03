const express = require('express');
const bodyParser = require('body-parser');
//Asignamos la dirección de las rutas del usuario a una variable
const userRoutes = require('./Routes/userRoutes');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use ('/user', userRoutes);

module.exports = app;