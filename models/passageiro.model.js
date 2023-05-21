// const {DataTypes} = require("sequelize");

// const db = require('../server');
// const Usuario = require("./usuario.model");
// const Carona = require('./carona.model')

// const Passageiro = db.sequelize.define("passageiros", {   
// }, {
//    timestamps: false // Desabilitar as colunas createdAt e updatedAt
// });

// // Relacionamento 1 para 1 Usuario - Passageiro | FK UsuarioId está em Passageiro
// Usuario.hasOne(Passageiro);
// Passageiro.belongsTo(Usuario);

// // Relacionamento muitos para muitos Carona - Passageiros | FKs na tabela relação PassageirosCaronas
// //Passageiro.belongsToMany(Carona, {through: 'PassageirosCaronas'});

// Passageiro.sync().then(() => {
//    console.log('Passageiro table created successfully!');
// }).catch((error) => {
//    console.error('Unable to create table : ', error);
// });

// module.exports = Passageiro;