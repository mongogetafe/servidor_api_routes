const express = require('express');

const app = express();

let pedidos = [
    {_id: 1, cliente: 'El que fuera', importe: 500},
    {_id: 2, cliente: 'El que fuese', importe: 1500},
    {_id: 3, cliente: 'Otro más', importe: 5000},
]

app.get('/', (req, res) => {
    res.status(200).json(pedidos);
})

module.exports = app;