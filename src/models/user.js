const {Sequelize} = require('sequelize')

const User = {

    id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        autoIncrement : true,
        allowNull : false
    },
    email : {
        type : Sequelize.STRING,
        allowNull : false
    },
    password : {
        type : Sequelize.STRING,
        allowNull : false
    },
    role : {
        type : Sequelize.STRING
    }
}


module.exports = User