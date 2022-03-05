// Importamos la clase Schema del paquete mongoose
const mongoose = require('mongoose');
// Declaramos el esquema del usuario
const userSchema = new mongoose.Schema({
  name: { type: String },
  surname: { type: String },
  email: { type: String },
  age: { type: Number },
});
// Exportamos el modelo del usuario
module.export = mongoose.model('User', userSchema);
