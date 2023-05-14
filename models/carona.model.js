const {DataTypes} = require("sequelize");

const db = require('../server');
const { createPool } = require("mysql2");
const Passageiro = require("./passageiro.model");
const Rota = require("./rota.model");

const Carona = db.sequelize.define("caronas", {
   horario: {
     type: DataTypes.TIME,
     allowNull: false
   },
   vagas: {
     type: DataTypes.INTEGER,
     allowNull: false
   },
   status: {
     type: DataTypes.BOOLEAN,
     allowNull: false
   }
});

Carona.belongsTo(Motorista);

Carona.belongsToMany(Passageiro);

Carona.hasMany(Rota);

Carona.sync().then(() => {
   console.log('Carona table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

module.exports = Carona;