const Sequelize = require("sequelize");

const sequelize = new Sequelize(
 'beegu_db',
 'sa',
 '1q2w3e4r@#$',
  {
    host: 'localhost',      
    dialect: 'mssql'
  }
);

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

module.exports = {Sequelize, sequelize};