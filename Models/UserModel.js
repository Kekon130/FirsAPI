// Importamos la clase Schema del paquete mongoose
const mongoose = require('mongoose');
// Declaramos el esquema del usuario
const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String },
  surname: { type: String },
  email: { type: String },
  age: { type: Number },
});
// Exportamos el modelo del usuario
module.exports = mongoose.model('User', userSchema);
