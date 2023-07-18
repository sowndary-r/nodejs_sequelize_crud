const dbconfig = require('../config/dbconfig.js');
const {Sequelize , DataTypes} = require('sequelize')
const sequelize = new Sequelize(  //creating object for sequelize by passing values in constructor
    dbconfig.DB,
    dbconfig.USER,
    dbconfig.PASSWORD,{
        host:dbconfig.HOST,
        dialect:dbconfig.dialect,
        operatorAliases : false,

        pool:{
            max:dbconfig.pool.max,
            min:dbconfig.pool.min,
            acquire:dbconfig.pool.acquire,
            idle:dbconfig.pool.idle
        }
    }
)

sequelize.authenticate()  // This method is provided by Sequelize and is used to authenticate the connection to the database.
.then(()=>{
    console.log('connected...')
})
.catch(err=>{
    console.log('error')
})

const db = {}  // create an object db to hold Sequelize-related properties. 

db.Sequelize = Sequelize
db.sequelize = sequelize
//Sequelize refers to the Sequelize constructor, while sequelize represents the instance of Sequelize connected to the database.

db.products = require('./productmodel.js')(sequelize,DataTypes) //it is a function,passing sequelize and datatypes as params.//products is the table name
//products is a table name
db.sequelize.sync({force:false})  //{ force: false } indicate that the synchronization should not drop and should not recreate the tables (i.e., no data loss) if they already exist.
.then(()=>{
    console.log('yes re sync..')
})

module.exports = db 