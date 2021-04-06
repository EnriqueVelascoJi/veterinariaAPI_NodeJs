const express = require("express");
const mongoose = require("mongoose"); //ORM para manipular la base de datos en Mongo
const routes = require("./routes");//Archivo de rutas
const bodyParser = require("body-parser"); // Permite leer los datos y leerlo en el controlador con req.body

const cors = require('cors');

//Crear el servidor
const app = express();


//Habilitar Cors
app.use(cors());

//Conectarse a mongoDB
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/RegistroCicata", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(res=>{
    console.log("Conexión exitosa!")
}).catch(err => {
console.log(Error, err.message);
});


//Habilitar el bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


//Habilitar Routing
app.use("/", routes());


// Definimos el puerto y arrancamos el servidor
app.listen(4000, () => {
    console.log("Servidor funcionado");
});