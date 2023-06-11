const { sequelize } = require('./server');

async function forceDeleteTables() {
  try {
    await sequelize.query('DROP TABLE IF EXISTS caronas CASCADE');
    await sequelize.query('DROP TABLE IF EXISTS rotas CASCADE');
    await sequelize.query('DROP TABLE IF EXISTS usuarios CASCADE');
    await sequelize.query('DROP TABLE IF EXISTS usuariosCaronas CASCADE');
    await sequelize.query('DROP TABLE IF EXISTS historicoUsuario CASCADE');
    await sequelize.query('DROP TABLE IF EXISTS veiculos CASCADE');
    console.log('Tabelas deletadas com sucesso!');
  } catch (error) {
    console.error(error);
  }
}

forceDeleteTables();





