//Esta parte funciona como el modelo vista - controlador, se habla de la logica de cómo funcionan los datos, se encarga de recibir las peticiones de los usuarios y dar respuesta a dichas peticiones, actua como intermediario entre el modelo y el main.js, se encarga de procesar la información que recibe el cliente (a través de la vista) y enviar dicha información al modelo correspondiente para que se realice la acción solicitada. Una vez que el modelo ha realizado la acción, el controlador devuelve los resultados al cliente a través de la vista. 

const userModel = require("../models/userModel.js");

exports.getAllUsers = (req,res) => {
    userModel.find()
    .then(users => res.json(users))
    .catch(err => res.status(500).json({error:err.message}))
};

//se utiliza la destruccturación del codigo para intercambiar datos entre los objetos creados, permite extraer valores de un objeto y asignarlo a las variables en una línea de codigo

//req es un objeto que representa la solicitud HTTP recibida por el servidor, y body es una de sus propiedades que contiene los datos enviados en el cuerpo de la solicitud (por ejemplo, los datos de un formulario enviado mediante POST)

exports.createUser = (req,res) => {
    const {username, email, password} = req.body;
    const newUser = new userModel({
        username,
        email,
        password
    });
    newUser.save()
    .then(newUser => res.status(201).json({sucess: 'created'}))
    .catch(err => res.status(500).json({message:'An error has ocurred', err}))
};

exports.updateUser = (req,res) => {
    const {id} = req.params;
    const {username, email, password} = req.body
    userModel.findByIdAndUpdate(id, {username, email, password}, {new:true})
    .then(user => {
        if(!user)throw new Error(`user with id ${id} not found`);
        res.status(200).json(user)
        })
    .catch(err => res.status(500).json({message:'An error has ocurred', err}))
};

exports.deleteUser = (req,res) => {
    const {id} = req.params;
    userModel.findByIdAndDelete(id)
    .then(user => {
        if(!user)throw new Error(`user with id ${id} not found`);
        res.status(200).json({message:'user deleted'})
        })
    .catch(err => res.status(500).json({message:'An error has ocurred', err}))
};

