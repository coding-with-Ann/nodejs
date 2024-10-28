const dbConnect = require('./mongodb')
//without ./ we can't import local file, it imports mongodb installed module

const insert = async ()=>{
    const db = await dbConnect()
    const result = await db.insertMany(
        //used await to acknowledge the result
        [
            {name: "iphone 12", brand: 'apple', price: 500, category: 'mobile'},
            {name: "iphone 13", brand: 'apple', price: 500, category: 'mobile'},
            {name: "iphone 14", brand: 'apple', price: 500, category: 'mobile'}
        ]
    )
    if(result.acknowledged){
        console.log("data inserted")
    }
}

insert()