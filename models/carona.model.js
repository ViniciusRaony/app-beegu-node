const {DataTypes, Model} = require("sequelize");

const db = require('../server');
const Motorista = require("./motorista.model")
const Passageiro = require("./passageiro.model")


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
}, {
  timestamps: false // Desabilitar as colunas createdAt e updatedAt
});

// Relacionamento 1 para muitos Carona - Motorista | FK MotoristaId está em Carona
Motorista.hasMany(Carona); 
Carona.belongsTo(Motorista);

// Relacionamento muitos para muitos Carona - Passageiros | FKs na tabela relação PassageirosCaronas
//Carona.belongsToMany(Passageiro, {through: 'PassageirosCaronas' });

Carona.sync().then(() => {
   console.log('Carona table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

module.exports = Carona;