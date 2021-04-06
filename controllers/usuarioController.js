//Funciones asociadas al modelo y al routing

const Usuario = require("../models/Usuario"); //Cargamos el modelo

//Cuando se crea un nuevo usuario
exports.nuevoUsuario = async (req, res, next) => {
    
    //Crear objecto del usurio con datos del req.body
    const usuario = new Usuario(req.body);

    try {
        await usuario.save();
        res.json({mensaje: "El usuario se agregó correctamente"});
        
    } catch (error) {
        console.log(error);
        next();
    }
    

}

//Obtener de los usuarios para la comprobación de credenciales
exports.obtenerUsuarios = async(req, res, next) => {
    try {
        const usuarios = await Usuario.find({});
        res.json(usuarios);
    } catch (error) {
        console.log(error);
        next();
    }
}

