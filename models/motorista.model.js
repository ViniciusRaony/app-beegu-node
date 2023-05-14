const {DataTypes} = require("sequelize");

const db = require('../server')

const Morotista = db.sequelize.define("motoristas", {
   cnh: {
     type: DataTypes.STRING,
     allowNull: false
   }
});

Morotista.hasMany(Carona);

Motorista.belongsTo(Veiculo);

Motorista.belongsTo(Usuario);

Motorista.sync().then(() => {
   console.log('Motorista table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

module.exports = Morotista;