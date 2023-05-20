const Sequelize = require("sequelize");

const sequelize = new Sequelize(
 'beegu_db',
 'root',
 'teste',
  {
    host: 'localhost',      
    dialect: 'mysql'
  }
);

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

module.exports = {Sequelize, sequelize};