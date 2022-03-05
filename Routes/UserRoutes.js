// Importamos la clase Router del paquete de express
const { Router } = require('express');
// Creamos un abjeto de la clase router
const router = Router();
// Asignamos la direccion del userController
const userController = require('../Controllers/userController');
// Definimos la ruta de la funcion que devuelve todos los usuarios registrados en la base de datos
router.get('/getAll', userController.getAllUsers);
// Definimos la ruta de la función que registra a un usuario en la bas de datos
router.post('/createUser', userController.createUser);
