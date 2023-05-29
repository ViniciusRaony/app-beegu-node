const {DataTypes} = require("sequelize");

const db = require('../server')
const Carona = require("./carona.model")

const Rota = db.sequelize.define("rotas", {
   enderecoInicial: {
     type: DataTypes.STRING,
     allowNull: false
   },
   enderecoFinal: {
     type: DataTypes.STRING,
     allowNull: false
   }
},  {
   timestamps: false // Desabilitar as colunas createdAt e updatedAt
});

// Relacionamento 1 para muitos Carona - Rota | FK CaronaId está em Rota
Carona.hasMany(Rota); 
Rota.belongsTo(Carona);

Rota.sync().then(() => {
   console.log('Rota table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

module.exports = Rota;