module.exports = {
    HOST: 'localhost',
    USER:'root',
    PASSWORD : '@Sowndarya02',
    DB : 'seqcrud',
    dialect : 'mysql',
    pool : {
        max:5, //maximum no of connections in the pool
        min:0, //minimum no of connections in the pool
        acquire:30000, // The maximum time (in milliseconds) that Sequelize will wait when trying to acquire a connection from the pool. 
        idle:10000 //The maximum time (in milliseconds) that a connection can remain idle in the pool before it is closed and removed.
    }
}