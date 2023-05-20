const {DataTypes} = require("sequelize");

const db = require('../server');
const Usuario = require("./usuario.model");

const Passageiro = db.sequelize.define("passageiros", {   
}, {
   timestamps: false // Desabilitar as colunas createdAt e updatedAt
});

// Relacionamento 1 para 1 Usuario - Passageiro | FK UsuarioId está em Passageiro
Usuario.hasOne(Passageiro);
Passageiro.belongsTo(Usuario);

Passageiro.sync().then(() => {
   console.log('Passageiro table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

module.exports = Passageiro;