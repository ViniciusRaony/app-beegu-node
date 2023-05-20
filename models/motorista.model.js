const {DataTypes, Model} = require("sequelize");

const db = require('../server');
const Usuario = require("./usuario.model");

const Motorista = db.sequelize.define("motoristas", {
   cnh: {
     type: DataTypes.STRING,
     allowNull: false
   }
});

// Relacionamento 1 para 1 Usuario - Motorista | FK UsuarioId está em Motorista
Usuario.hasOne(Motorista); 
Motorista.belongsTo(Usuario);

Motorista.sync().then(() => {
   console.log('Motorista table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

module.exports = Motorista;