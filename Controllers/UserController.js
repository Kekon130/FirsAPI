/* eslint-disable no-console */
// Importamos el modelo del usuario
const User = require('../Models/UserModel');
// Funciones Post
// Declaramos la función createUser
function createUser(req, res) {
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    return res.status(200).send(userInfo);
  });
}
// FUnciones Get
// Declaramos la función getAllUsers
function getAllUsers(req, res) {
  User.find({}, (err, users) => {
    if (err) {
      return res.status(400).send(err.message);
    }
    return res.send(users);
  });
}
// Declaramos la función getUserByEmail
function getUserByEmail(req, res) {
  User.findOne(req.query, (err, user) => {
    if (err) {
      return res.status(400).send(err.message);
    }
    return res.send(user);
  });
}
// Funciones Update
// Declaramos la funcion updateUser
function updateUser(req, res) {
  User.findOneAndUpdate(req.query, req.body, (err, updatedUser) => {
    if (err) { return res.status(400).send(err.message); }
    return res.status(200).send(updatedUser);
  });
}
// Funciones delete
// Declaramos la función deleteUser
function deleteUser(req, res) {
  User.findOneAndDelete(req.query, req.body, (err, deletedUser) => {
    if (err) { return res.status(400).send(err.message); }
    return res.status(200).send(deletedUser);
  });
}
module.exports = {
  createUser,
  getAllUsers,
  getUserByEmail,
  updateUser,
  deleteUser,
};
