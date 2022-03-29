// Importamos la clase Schema del paquete mongoose
const mongoose = require('mongoose');
// Declaramos el esquema del usuario
const { Schema } = mongoose;
const { pbkdf2Sync, randomBytes } = require('crypto');
// Definimos el esquema del usuario
const userSchema = new Schema({
  name: { type: String },
  surname: { type: String },
  age: { type: Number },
  username: { type: String, unique: true, required: [true, 'username required'] },
  email: {
    type: String, lowercase: true, unique: true, required: [true, 'email required'],
  },
  password: { type: String, select: false, required: [true, 'password required'] },
  salt: { type: String, select: false },
});
// Creamos la función que cifra las contraseñas
function hashPassword(next) {
  if (this.isModified('password')) {
    this.salt = randomBytes(64).toString('hex');
    this.password = pbkdf2Sync(this.password, this.salt, 1000, 64, 'sha512').toString('hex');
  }
  next();
}
// Creamos la función que compara las contraseñas
function checkPassword(password) {
  return this.password === pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
}
// Creamos la función que cifra la contraseña antes de guardar el usuario
userSchema.pre('save', hashPassword);
// Hacemos que el metodo checkPassword que exporta el modelo sea igual que el existente
userSchema.method.checkPassword = checkPassword;
// Exportamos el modelo del usuario
module.exports = mongoose.model('User', userSchema);
