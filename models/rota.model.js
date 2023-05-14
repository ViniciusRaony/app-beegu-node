const {DataTypes} = require("sequelize");

const db = require('../server')

const Rota = db.sequelize.define("rotas", {
   enderecoInicial: {
     type: DataTypes.STRING,
     allowNull: false
   },
   enderecoFinal: {
     type: DataTypes.STRING,
     allowNull: false
   }
});

Rota.belongsTo(Carona);

Rota.belongsToMany(Usuario, { through: 'historicoUsuario' });

Rota.sync().then(() => {
   console.log('Rota table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

module.exports = Rota;