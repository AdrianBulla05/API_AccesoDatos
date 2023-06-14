//En este caso la primera constante llama toda la librería y la segunda constante llama el metodo que se requiere utilizar
const express = require("express");
//Se encarga de hacer la ruta que deseo hacer
const router = express.Router();

//Importar controladores
const userController = require("../controllers/userController.js");

// "/" significa que es el punto de partida de la url, el solo dominio

//http://localhost:1098

//se tienen que crear los metodo get post put delete, están en el user controller
router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
