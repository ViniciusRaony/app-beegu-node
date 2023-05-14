const {DataTypes} = require("sequelize");

const db = require('../server');

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

Carona.sync().then(() => {
   console.log('Carona table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

module.exports = Carona;