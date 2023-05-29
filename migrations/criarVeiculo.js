module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.createTable('Veiculo', {
        placa: {
            type: DataTypes.STRING(7),
            allowNull: false
          },
          modelo: {
            type: DataTypes.STRING(30),
            allowNull: false
          },
          cor: {
            type: DataTypes.STRING(15),
            allowNull: false
          }
      });
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.dropTable('Veiculo');
    }
  };