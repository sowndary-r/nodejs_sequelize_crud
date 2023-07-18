const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize,DataTypes)=>{
    const Product = sequelize.define("product",{ 
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            autoIncrement: true,
            primaryKey: true
        
        },
        name:DataTypes.STRING,
        age:DataTypes.INTEGER,
    
    })
    return Product
}