/* eslint-disable func-names */
// Importamos la clase Schema del paquete mongoose
const mongoose = require('mongoose');
// Declaramos el esquema del usuario
const { Schema } = mongoose;
const { pbkdf2Sync, randomBytes } = require('crypto');

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

userSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    this.salt = randomBytes(64).toString('hex');
    this.password = pbkdf2Sync(this.password, this.salt, 1000, 64, 'sha512').toString('hex');
  }
  next();
});
// Exportamos el modelo del usuario
module.exports = mongoose.model('User', userSchema);
