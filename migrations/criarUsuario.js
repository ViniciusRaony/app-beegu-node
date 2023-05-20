module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Usuario', {
            id: { 
            type: Sequelize.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
           },
           nome: {
             type: Sequelize.DataTypes.STRING(150),
             allowNull: false
           },
           email: {
             type: Sequelize.DataTypes.STRING(150),
             unique: true,
             allowNull: false
           },
           senha: {
             type: Sequelize.DataTypes.STRING(30),
             allowNull: false
           },
           telefone: {
             type: Sequelize.DataTypes.STRING(11),
             allowNull: false
           }
      });
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Usuario');
    }
  };