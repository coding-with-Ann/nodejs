const dbConnect = require('./mongodb')

const updateData =async ()=>{
    let data = await dbConnect()
    let result = await data.updateOne(
        //HOW TO UPDATE ALL RECORDS ?
        {name:'iphone 15'},{
            $set:{name: 'iphone 15 pro'}
        }
    )
    console.warn(result)
}
updateData()