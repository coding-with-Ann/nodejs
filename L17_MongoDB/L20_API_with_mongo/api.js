const express = require('express')
const app = express()
const dbConnect = require('../L19_Crud_data_from_mongo/mongodb')
const mongodb = require('mongodb') //importing mongodb installed module for delete api

//to get body from request and use it in post and put api  ***
app.use(express.json())

//get api method(to get data from database)
app.get('/', async (req,res)=>{
    let data = await dbConnect()
    data = await data.find().toArray()
    res.send(data)

})
// we can't pass body in get api method(cos we are reading data).

//post api method(to add new data to database)
app.post('/', async (req, res)=>{
    let data = await dbConnect()
    let result = data.insertOne(req.body) //data coming from body is inserted into database
    //normally the body data comes from react, angular to node
    res.send(result)
})

//put api method(to update data in database using put api)
//we can also use post api to update data but put api is standard and recomended method

// app.put('/', async (req,res)=>{
//     let data = await dbConnect()
//     let result =await data.updateOne(
//         {name: req.body.name},    
//         {$set:req.body}  //{} not required for req.body
//     )
//     res.send({result:"update"})
// })

//if we also want to change the name then we can pass name using 
//req parameter(/iphone 11) then app.put("/:name") and {name: req.params.name}

app.put('/:name', async (req,res)=>{   //  /:name
    let data = await dbConnect()
    let result =await data.updateOne(
        {name: req.params.name},    // req.params
        {$set:req.body}  //{} not required for req.body
    )
    res.send({result:"update"})
})

//delete api method
app.delete("/:id",async (req,res)=>{    //:id
    const data =await dbConnect()
    let result =await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)})  //*** */
    res.send(result)
})
 
app.listen(5000)

