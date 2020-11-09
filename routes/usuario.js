const express = require('express');
const bcrypt = require('bcrypt');

const app = express();

const logs = require('../middleware/logs');

let usuarios = [];

app.post('/', (req, res) => {
    let usuario = {
        nombre: req.body.nombre,
        apellidos: req.body.apellidos,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        rol: req.body.rol
    }
    usuarios.push(usuario);
    res.status(200).json({
        mensaje: `Usuario ${usuario.nombre} ha sido creado`
    })
    console.log(usuarios);
})

// app.use(logs.crearLog);

app.post('/login', logs.crearLog, (req, res) => {
    let usuario = usuarios.find(elem => {
        return elem.email === req.body.email;
    })
    if(usuario === undefined) {
        return res.status(200).json({
            mensaje: 'El correo electrónico no existe'
        })
    }
    if(!bcrypt.compareSync(req.body.password, usuario.password)) {
        return res.status(200).json({
            mensaje: 'Contraseña incorrecta'
        })
    }
    res.status(200).json({
        mensaje: 'Bienvenido de nuevo'
    })  
})

app.post('/logout', logs.crearLog, (req, res) => {
    res.status(200).json({
        mensaje: 'Hasta pronto'
    })
})

module.exports = app;