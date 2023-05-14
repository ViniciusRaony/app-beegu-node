const {DataTypes} = require("sequelize");

const db = require('../server');
const Passageiro = require("./passageiro.model");

const Usuario = db.sequelize.define("usuarios", {
   nome: {
     type: DataTypes.STRING,
     allowNull: false
   },
   email: {
     type: DataTypes.STRING,
     allowNull: false
   },
   senha: {
     type: DataTypes.STRING,
     allowNull: false
   },
   telefone: {
     type: DataTypes.STRING,
     allowNull: false
   }
});

Usuario.hasMany(Motorista);

Usuario.hasMany(Passageiro);

Usuario.sync().then(() => {
   console.log('Usuario table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

module.exports = Usuario;