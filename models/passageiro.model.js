const {DataTypes} = require("sequelize");

const db = require('../server');
const Carona = require("./carona.model");
const Usuario = require("./usuario.model");

const Passageiro = db.sequelize.define("passageiros", {   
});

Passageiro.belongsToMany(Carona);

Passageiro.belongsTo(Usuario);

Passageiro.sync().then(() => {
   console.log('Passageiro table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

module.exports = Passageiro;