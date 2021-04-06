//Rutas a las distintos metodos o consultas

const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioController");

module.exports = function() {
    

    //Agrega un nuevo usuario vía POST
    router.post('/usuarios',
        usuarioController.nuevoUsuario
    );

    //Obtenciónn de los usuarios para la comprobación de credenciales (Login) y recuperación de la contraseña 
    router.get('/usuarios',
        usuarioController.obtenerUsuarios
    );
    return router;
}
