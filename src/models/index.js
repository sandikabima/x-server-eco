const db = require('../utils/conn')
const User = require('../models/user')

const user = db.define("User", User, {
    hooks : {
        beforeCreate(user){
            user.role = 'costumer'
            user.password = hashPassword(user.password)
        }
    }
}, {tableName : "user"})


db.sync()

module.exports = {user}