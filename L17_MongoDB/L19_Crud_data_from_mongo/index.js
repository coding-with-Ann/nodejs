//we use this connection process in real projects not the L_18_connect process

const dbConnect = require('./mongodb')

//one way to handle the promise
// dbConnect().then((res)=>{
//     res.find().toArray().then((data)=>{
//         console.warn(data)
//     })
// })

//another way to handle promise
const main = async ()=>{
    let data = await dbConnect()
    data =await data.find().toArray()
    console.log(data)
}
main()