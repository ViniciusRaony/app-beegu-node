const {DataTypes} = require("sequelize");

const db = require('../server');
const Motorista = require("./motorista.model");
const Passageiro = require("./passageiro.model");

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

Usuario.sync().then(() => {
   console.log('Usuario table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

module.exports = Usuario;
