// Importamos express
const express = require('express');
// Asignamos la dirección de las rutas del usuario a una variable
const userRoutes = require('./Routes/userRoutes');
// Creamos una app Express
const app = express();
// Le decimos a la API que usaremos ficheros JSON
app.use(express.json());
// Declaramos las rutas
app.use('/user', userRoutes);
// Exportamos los metodos de app
module.exports = app;
