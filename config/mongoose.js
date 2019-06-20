const mongoose = require('mongoose');

module.exports = function () {
    //const url = 'mongodb://username:dbpassword@ds058508.mlab.com:58508/ieee-db'
    //mongoose.connect(url,{useNewUrlParser:true})
    
    mongoose.connect('mongodb://localhost:27017/workshop', { useNewUrlParser: true });
    mongoose.Promise = global.Promise;

    const db = mongoose.connection;

    db.on('connected', function () {
        console.log("Banco de Dados conectado");
    });

    db.on('disconnected', function () {
        console.log("Banco de Dados desconectado");
    });

    db.on('err', function (err) {
        console.log("Erro na conexão do Banco de Dados: " + err);
    });
}