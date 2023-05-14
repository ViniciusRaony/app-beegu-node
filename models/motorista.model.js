const {DataTypes, Model} = require("sequelize");

const db = require('../server')

const Motorista = db.sequelize.define("motoristas", {
   cnh: {
     type: DataTypes.STRING,
     allowNull: false
   }
});

Motorista.sync().then(() => {
   console.log('Motorista table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

module.exports = Motorista;