const {MongoClient} = require('mongodb')   //importing client
const url = 'mongodb://localhost:27017'    //connection url
const client = new MongoClient(url)        // fetches data from db and stores in client.
const database = 'e-comm'


async function getData(){
    let result = await client.connect()        //to connect to client
    //fetching data takes time so using promises
    let db = result.db(database)    //using e-comm db from databases
    let collection = db.collection('products')
    let response = await collection.find({}).toArray()
    //to array prints the response in structured way
    //to find any one object data we can use its name in find({name: 'iphone 15'})
    console.log(response)
}

getData()

//we can also connect to multiple databases at the same time

