/* eslint-disable no-console */
const mongoose = require('mongoose'); // Importamos mongoose
const app = require('./app'); // Importamos el fichero app.js

const port = process.env.PORT || 3000; // Asignamos el puerto en el que levantaremos la API
const mongodb = process.mongoose.PORT || 'mongodb://localhost:27017/ToDo-API'; // Asignamos el puerto en el que se alojará la base de datos

// Conectamos la API con la base de datos en Mongo
mongoose.connect(mongodb, (err) => {
  if (err) {
    console.log('Unable to connect to database.'); // Si ocurre un error durante la conexión se mostrará un error en la consola
  } else {
    app.connect(port, () => {
      console.log('API running.'); // Si todo va bien se mostrará un mensaje por pantalla
    });
  }
});
