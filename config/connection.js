require("dotenv").config();
const Sequelize = require('sequelize');



const URI = process.env.MYSQLURI
// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: 'localhost',
//     dialect: 'mysql',
//     port: 3306
//   }
// );
const sequelize = new Sequelize(URI);

module.exports = sequelize;
