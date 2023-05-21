// const {DataTypes, Model} = require("sequelize");

// const db = require('../server');
// const Passageiro = require('./passageiro.model')
// const Carona = require('./carona.model')

// //const Carona = sequelize.define('Carona', { name: DataTypes.STRING });
// //const Passageiro = sequelize.define('Passageiro', { name: DataTypes.STRING });
// const PassageiroCarona = db.sequelize.define('PassageiroCarona', {
//   caronaId: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: Carona,
//       key: 'id'
//     }
//   },
//   passageiroId: {
//     type: DataTypes.INTEGER,
//     references: {
//       model: Passageiro,
//       key: 'id'
//     }
//   }
// }, {
//     timestamps: false // Desabilitar as colunas createdAt e updatedAt
// });

// //Relacionamento muitos para muitos Carona - Passageiro
// Passageiro.belongsToMany(Carona, { through: PassageiroCarona });
// Carona.belongsToMany(Passageiro, { through: PassageiroCarona });

// PassageiroCarona.sync().then(() => {
//     console.log('PassageiroCarona table created successfully!');
//  }).catch((error) => {
//     console.error('Unable to create table : ', error);
//  });
 
//  module.exports = PassageiroCarona;