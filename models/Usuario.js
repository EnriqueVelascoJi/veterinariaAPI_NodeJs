//Creación del modelo que interactua con la base de datos
// Modelo = Tabla = Schema

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Definimos el Schema (Creamos una instancia de mongoose.Schema)
const usuarioSchema = new Schema({
    nombre: {
        type: String,
        trim: true
    },
    rfc: {
        type: String,
        trim: true
    },
    curp: {
        type: String,
        trim: true
    },
    programaPosgrado: {
        type: String,
        trim: true
    },
    email: {
        type: String
    },
    passwordC: {
        type: String
    },
    passwordConfirm: {
        type: String
    },
    tipoUsuario: {
        type: String,
        trim: true
    },
    pregunta1: {
        type: String,
        trim: true
    },
    pregunta2: {
        type: String,
        trim: true
    },
    respuesta1: {
        type: String,
        trim: true
    },
    respuesta2: {
        type: String,
        trim: true
    },
    tipoDocente: {
        type: String,
        trim: true
    },
    fechaIngreso: {
        type: String,
        trim: true
    },
    temaTesis: {
        type: String,
        trim: true
    },
    asesor1: {
        type: String,
        trim: true
    },
    asesor2: {
        type: String,
        trim: true
    }
    

});

//Hacemos disponible el modelo (Lo necesitamos en el controlador)
module.exports = mongoose.model('Usuario', usuarioSchema);
