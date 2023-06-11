// const {DataTypes} = require("sequelize");

// const db = require('../server')
// const Usuario = require("./usuario.model")
// const Rota = require("./rota.model")

// const historicoUsuario = db.sequelize.define("historicoUsuarios", {
//   id: { 
//     type: DataTypes.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
//    },
//    dataCarona: {
//      type: DataTypes.DATE,
//      allowNull: false
//    },
//    usuarioId: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: Usuario,
//         key: 'id'
//       }
//     },
//     rotaId: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: Rota,
//         key: 'id'
//       }
//     }
// }, {
//    timestamps: false // Desabilitar as colunas createdAt e updatedAt
// });

// //Relacionamento muitos para muitos Rota - Usuario
// Usuario.belongsToMany(Rota, { through: historicoUsuario });
// Rota.belongsToMany(Usuario, { through: historicoUsuario });

// historicoUsuario.sync().then(() => {
//    console.log('historicoUsuario table created successfully!');
// }).catch((error) => {
//    console.error('Unable to create table : ', error);
// });

// module.exports = historicoUsuario;