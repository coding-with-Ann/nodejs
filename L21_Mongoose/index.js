const mongoose = require('mongoose')


// Mongoose contains two parts schema and model.
const main = async()=>{
    await mongoose.connect('mongodb://localhost:27017/e-comm')  //connectiong to e-comm db
    const productSchema = new mongoose.Schema({                //schema
        name:String
    })
    const productsModel = mongoose.model('products', productSchema) //model
    //passing collections name, schema 
    let data = new productsModel({name: 's21', price:400})  //created products model instance to insert data
    // we can't insert other fields here because we defined only name in schema
    let result = await data.save()
    console.log(result)

}
main()