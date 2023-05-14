const {DataTypes} = require("sequelize");

const db = require('../server')

const historicoUsuario = db.sequelize.define("historicoUsuarios", {
   dataCarona: {
     type: DataTypes.DATE,
     allowNull: false
   }
});

historicoUsuario.sync().then(() => {
   console.log('historicoUsuario table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

module.exports = historicoUsuario;