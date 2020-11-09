let logSesiones = [];

exports.crearLog = (req, res, next) => {
    logSesiones.push({
        fecha: new Date(),
        email: req.body.email
    })
    console.log(logSesiones);
    // res.status(200).json({  Sobreescribe la respuesta de la callback
    //     mensaje: 'todo ok'
    // })
    next();
}