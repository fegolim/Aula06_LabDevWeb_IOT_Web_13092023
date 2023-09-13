const Sequelize = require("sequelize")
const sequelize = new Sequelize("esp32", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

module.exports = {
    Sequelize: Sequelize, 
    sequelize: sequelize
}