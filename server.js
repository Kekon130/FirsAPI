/* eslint-disable no-console */
// Importamos mongoose
const mongoose = require('mongoose');
// Importamos el fichero app.js
const app = require('./app');
// Asignamos el puerto en el que levantaremos la API
const port = process.env.PORT || 3000;
// Asignamos el puerto en el que se alojará la base de datos
const mongodb = process.env.MONGODB || 'mongodb://127.0.0.1:27017/FirstAPI';

// Conectamos la API con la base de datos en Mongo
mongoose.connect(mongodb, { useNewUrlParser: true }, (err) => {
  // Si ocurre un error durante la conexión se mostrará un error en la consola
  if (err) console.log('Unable to connect to database.');
  // Si todo va bien se mostrará un mensaje por pantalla
  else app.listen(port, () => { console.log(`Node server running on http://localhost:${port}`); });
});
