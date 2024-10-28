//Search api can be made with single field and multiple fileds
//If we search using single field like name then its a single field serach api
//If we serach using multiple fields like name, brand, price etc its a multi field api

//For search we will use regex

//We can also search using put, post, delete methods but usually get is used for search
 
const express = require('express')
const app = express()
require('../L23_api_mongoose/config')
const product = require('../L23_api_mongoose/product')

app.use(express.json())

app.get('/search/:key', async(req,res)=>{
    console.log(req.params.key)
    let data = await product.find(
        {
            "$or":[                     //indicates this can be used with multiple fields aswell
                {"name":{$regex:req.params.key}},
                {"brand":{$regex:req.params.key}}
            ]
        }
    )
    res.send(data)
})

app.listen(5000)