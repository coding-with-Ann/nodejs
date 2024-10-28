const express = require('express')
const app = express()
require('./config')
const product = require('./product')

app.use(express.json())   //used to convert the streamed data into json
app.post('/create',async (req,res)=>{
    let data = new product(req.body) //product is the imported model
//but we have to parse this body(The data we get from body comes as a stream,
// so we have to convert it into json, used app.use to convert data to json)
    let result =await data.save()
    console.log(result) 
    res.send(result)
})

app.get('/list', async(req,res)=>{
    let data = await product.find()
    res.send(data)
})

app.delete('/delete/:_id', async(req,res)=>{
    let data = await product.deleteOne(req.params)
    res.send(data)
})

app.put('/update/:_id', async(req,res)=>{
    let data = await product.updateOne(
       req.params,{$set:req.body}     //{} is not needed because req.params is a id which is an object
    )
    res.send(data)
})

app.listen(5000)

