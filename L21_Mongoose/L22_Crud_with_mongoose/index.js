const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/e-comm')
const productSchema = new mongoose.Schema({
    name:String,
    brand:String,
    price:Number,
    category:String
})

const saveInDB = async()=>{
    const product = mongoose.model('products',productSchema)  //collection name is products
    let data = new product(
        {name: 'iphone xr', price:4000, brand: 'apple', category: 'mobile'}
    )
    let result =await data.save()
    console.log(result)

}
// saveInDB()

const updateInDB = async()=>{
    const product = mongoose.model('products', productSchema)
    let data =await product.updateOne(
        {name: 'iphone xr'},{$set:{name:'iphone 10', price: 450}}
    )
    console.log(data)
}
// updateInDB()

const deleteInDB = async()=>{
    const product = mongoose.model('products', productSchema)
    let data = await product.deleteOne({price: 4000})
    console.log(data)
}
// deleteInDB()

const findInDB = async()=>{
    const product = mongoose.model('products', productSchema)
    let data =await product.find()  //no toArray()
    //to find any specific field value we can pass it in find() like find({name:'iphone 10'})
    console.log(data)
}
// findInDB()