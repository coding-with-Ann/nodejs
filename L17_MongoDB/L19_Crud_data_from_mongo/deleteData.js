const dbConnect = require('./mongodb')

const deleteData =async ()=>{
    let data = await dbConnect()
    let result =await data.deleteMany({name:"note13"})
    console.warn(result)
    if(result.acknowledged){
        console.log("record deleted")
    }
}

deleteData()

//If there's no record with given key, displays the deletedCount as 0
//with this we can know that there is no data with that name.