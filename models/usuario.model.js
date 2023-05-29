const {DataTypes} = require("sequelize");

const db = require('../server');
const Veiculo = require("./veiculo.model");

const Usuario = db.sequelize.define("usuarios", {
   id: { 
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
   },
   nome: {
     type: DataTypes.STRING,
     allowNull: false
   },
   email: {
     type: DataTypes.STRING,
     unique: true,
     allowNull: false
   },
   senha: {
     type: DataTypes.STRING,
     allowNull: false
   },
   telefone: {
     type: DataTypes.STRING,
     allowNull: false
   },
}, {
  timestamps: false // Desabilitar as colunas createdAt e updatedAt
});

// Relacionamento 1 para 1 Usuario - Veiculo | FK VeiculoId está em Usuário
Veiculo.hasOne(Usuario);
Usuario.belongsTo(Veiculo);

Usuario.sync().then(() => {
   console.log('Usuario table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

module.exports = Usuario;
