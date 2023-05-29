const {DataTypes, Model} = require("sequelize");

const db = require('../server');
const Usuario = require("./usuario.model");
const Carona = require("./carona.model")

const UsuarioCarona = db.sequelize.define('usuariosCaronas', {
  usuarioId: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: 'id'
    }
  },
  caronaId: {
    type: DataTypes.INTEGER,
    references: {
      model: Carona,
      key: 'id'
    }
  }
}, {
    timestamps: false // Desabilitar as colunas createdAt e updatedAt
});

//Relacionamento muitos para muitos Carona - Usuario
Usuario.belongsToMany(Carona, { through: UsuarioCarona });
Carona.belongsToMany(Usuario, { through: UsuarioCarona });

UsuarioCarona.sync().then(() => {
    console.log('PassageiroCarona table created successfully!');
 }).catch((error) => {
    console.error('Unable to create table : ', error);
 });
 
 module.exports = UsuarioCarona;