const db = require('../models')
const axios = require('axios');
const {Sequelize , DataTypes} = require('sequelize')
//create main model
const Product = db.products //now Product is the table name.
let express = require('express')
const app = express()
let bodyparser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyparser.json())

//main work
//1.create 

const add = async(req,res)=>{
    
    let info = {
        id:req.body.id,
        name : req.body.name,
        age : req.body.age
    }
    console.log(req.body.id);
   
const product = await Product.create(info)
res.status(200).send(product)
console.log(`added : ${product}`)
}


//get all products

const getall  = async(req,res)=>{
    let products = await Product.findAll({})
    /*
    to find only specified attribute,use
    attribute:[
        'att1',
        'att2'
    ]
    */
    res.status(200).send(products)
}

//get single product
const getone = async(req,res)=>{
    let findid = req.body.id;
      let singleprod = await Product.findOne({where:{id:findid}})
      res.status(200).send(singleprod)
}

//updateproduct 
const update = async(req,res)=>{
    let id= req.body.id;
    let product = await Product.update(req.query,{where:{id:id}})
    res.status(200).send(product)

}

//deleteproduct by id

const deleteprod = async(req,res)=>{
    let id = req.body.id;
    await Product.destroy({where:{id:id}})
    res.status(200).send('product is deleted');
}


//getting response from api using axios

const axi = async(req,res)=>{
    let url = 'https://api.neoscan.io/api/main_net/v1/get_all_nodes';
    const response= await axios(url);
    res.json(response.data);
}

module.exports = {
axi,
add,
getall,
getone,
update,
deleteprod
}