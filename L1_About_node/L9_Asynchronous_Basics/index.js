// //SYNCHRONOUS
// console.log("start exec...")
// console.log("logic exec...")
// console.log("complete exec...")

// console.log()
// //ASYNCHRONOUS
// console.log("start exec...")
// setTimeout(()=>{
//     console.log("logic exec...")
// }, 2000)
// console.log("complete exec...")

//DRAWBACK OF ASYNCHRONOUS
// let a = 10
// let b = 0

// setTimeout(()=>{
//     b=20
// }, 2000)

// console.log(a+b)

// The output will be 10 cos b loads after 2 seconds as it is a async operation
//we might expect output to be 30 but here it is 10 because of asynchronous operation.
//This is a drawback.




//HANDLE ASYNCHRONOUS DATA IN NODE JS
let a=20
const waitingData = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(30)
    },2000)
})
waitingData.then((data)=>console.log(a+data)).catch(err=>{
    console.log(err)
})

