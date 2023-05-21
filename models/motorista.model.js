// const {DataTypes, Model} = require("sequelize");

// const db = require('../server');
// const Usuario = require("./usuario.model");
// const Veiculo = require("./veiculo.model")

// const Motorista = db.sequelize.define("motoristas", {
//    cnh: {
//      type: DataTypes.STRING,
//      allowNull: false
//    }
// }, {
//  timestamps: false // Desabilitar as colunas createdAt e updatedAt
// });

// // Relacionamento 1 para 1 Usuario - Motorista | FK UsuarioId está em Motorista
// Usuario.hasOne(Motorista); 
// Motorista.belongsTo(Usuario);

// // Relacionamento 1 para 1 Veiculo - Motorista | FK VeiculoId está em Motorista
// Veiculo.hasOne(Motorista); 
// Motorista.belongsTo(Veiculo);

// Motorista.sync().then(() => {
//    console.log('Motorista table created successfully!');
// }).catch((error) => {
//    console.error('Unable to create table : ', error);
// });

// module.exports = Motorista;