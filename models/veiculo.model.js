const {DataTypes} = require("sequelize");

const db = require('../server');

const Veiculo = db.sequelize.define("veiculos", {
   placa: {
     type: DataTypes.STRING,
     allowNull: false
   },
   modelo: {
     type: DataTypes.STRING,
     allowNull: false
   },
   cor: {
     type: DataTypes.STRING,
     allowNull: false
   }
}, {
  timestamps: false // Desabilitar as colunas createdAt e updatedAt
});

Veiculo.sync().then(() => {
   console.log('Veiculo table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

module.exports = Veiculo;