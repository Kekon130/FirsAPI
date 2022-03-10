// Importamos el modelo del usuario
const User = require('../Models/UserModel');
// Declaramos la función getAllUsers
function getAllUsers(req, res) {
  User.find({}, (err, users) => {
    if (err) {
      return res.status(400).send(err.message);
    }
    return res.send(users);
  });
}
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

module.exports = {
  getAllUsers,
  createUser,
};
