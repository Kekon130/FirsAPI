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

/* function getUserId(req, res) {

} */
// Funciones Update
// Declaramos la funcion updateUser
function updateUser(req, res) {
  User.findByIdAndUpdate(req.query.userId, req.body, (err, updatedUser) => {
    if (err) { return res.status(400).send(err.message); }
    return res.status(200).send(updatedUser);
  });
}
// Funciones delete
// Declaramos la función deleteUser
function deleteUser(req, res) {
  User.findByIdAndDelete(req.query.userId, req.body, (err, deletedUser) => {
    if (err) { return res.status(400).send(err.message); }
    return res.status(200).send(deletedUser);
  });
}
module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
};
