// const {Sequelize} = require('sequelize')
// const pg = require('pg')
// require('dotenv').config()

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

// module.exports = sequelize;

const { Sequelize } = require('sequelize');
const pg = require('pg');

// Hapus baris berikut karena kita tidak lagi menggunakan dotenv
// require('dotenv').config();

// Gunakan variabel lingkungan yang disediakan oleh layanan hosting
const sequelize = new Sequelize(
    process.env.POSTGRES_DATABASE,
    process.env.POSTGRES_USER,
    process.env.POSTGRES_PASSWORD,
    {
        host: process.env.POSTGRES_HOST,
        port: 5432, // Port default untuk PostgreSQL
        dialect: 'postgres', // Gunakan 'postgres' untuk PostgreSQL
        dialectModule: pg,
        logging: process.env.NODE_ENV === "development" ? (...msg) => console.log(msg) : false,
        dialectOptions: {
            // Tambahkan opsi yang diperlukan sesuai kebutuhan Anda
            // Misalnya, untuk menggunakan SSL, Anda bisa menambahkan { ssl: { rejectUnauthorized: false } }
            ssl: process.env.POSTGRES_URL.includes('sslmode=require') ? { rejectUnauthorized: false } : false,
        } 
    }
);

module.exports = sequelize;