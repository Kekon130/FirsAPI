// Importamos la clase Schema del paquete mongoose
const mongoose = require('mongoose');
// Declaramos el esquema del usuario
const userSchema = new mongoose.Schema({
  nombre: { type: String },
  apellido: { type: String },
  email: { type: String },
  edad: { type: Number },
});
// Exportamos el modelo del usuario
module.export = mongoose.model('User', userSchema);
