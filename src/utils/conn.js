const {Sequelize} = require('sequelize')
const pg = require('pg')
require('dotenv').config()

// const sequelize = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASSWORD,
//     {
//         host : process.env.DB_HOST,
//         port : process.env.DB_PORT,
//         dialect : process.env.DB_DIALECT,
//         dialectModule: pg,
//         logging : process.env.NODE_ENV === "development" ? (...msg) => console.log(msg) : false,
//         dialectOptions : {
//             requestTimeout : 3000,
//             encrypt : true,
//         } 
//     }
// )

const sequelize = new Sequelize('postgres://admin:admin@localhost:5432/mydb', {
  dialectModule: pg
});

module.exports = sequelize