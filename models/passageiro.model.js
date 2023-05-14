const {DataTypes} = require("sequelize");

const db = require('../server');

const Passageiro = db.sequelize.define("passageiros", {   
});

Passageiro.sync().then(() => {
   console.log('Passageiro table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

module.exports = Passageiro;