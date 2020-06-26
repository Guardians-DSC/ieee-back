const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

module.exports = function () {
    
    mongoose.connect('mongodb+srv://ieee-user:chMvJJdZRcqe28L0@ieee-apk-db-2c5e2.mongodb.net/test?retryWrites=true&w=majority', { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true });
    //mongoose.connect('mongodb://localhost:27017/workshop', { useNewUrlParser: true });
    
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