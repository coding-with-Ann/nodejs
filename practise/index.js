// const http = require('http')
// const data = require('./data')
// http.createServer((req,res)=>{
//     res.writeHead(200,{'content-type':'application/json'})
//     res.write(JSON.stringify(data))
//     res.end()
// }).listen(5000)

// const { name } = require("ejs")

// const { name } = require("ejs")

// const fs = require('fs')
// let input = process.argv
// const path = require('path')
// const dirPath = path.join(__dirname)
// if(input[2]=='create'){
//     fs.writeFileSync(`${dirPath}/new.txt`, 'created new text file')
// }

// else if(input[2]=='read'){
//     fs.readFile(`${dirPath}/new.txt`, 'utf8', (err, item)=>{
//         console.log(item)
//     })
// }

// else if(input[2]=='update_cont'){
//     fs.appendFile(`${dirPath}/new.txt`, `updated the text file`, (err)=>{
//         if(!err){
//             console.log('file updated')
//         }
//     })
// }
// else if(input[2]=='rename'){
//     fs.rename(`${dirPath}/new.txt`, `${dirPath}/rename.txt`, (err)=>{
//         if(!err){
//             console.log('file renamed')
//         }
//     })
// }

// else if(input[2]=='delete'){
//     fs.unlinkSync(`${dirPath}/rename.txt`)
// }

// else{
//     console.log('invalid')
// }

// let name = "Ben"
// const waitingName = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("Tennyson")
//     },2000)
// }) 
// waitingName.then((data)=>console.log(name+data))

// const express = require('express')
// const app = express()
// const path = require('path')                                        
// const dirPath = path.join(__dirname)                              
// // app.get('/', (req, res)=>{                               
// //     res.sendFile(`${dirPath}/data.js`)
// // })                                 
// app.use(express.static(dirPath))
// app.listen(5000)  //we have access the file with its name and extension in browser

const express = require('express')
const app = express()
app.set('view engine', 'ejs')

const reqFilter = (req, res, next)=>{
    if(!req.query.age){
        res.send("Please provide age")
    }
    else if(req.query.age<18){
        res.send('you cant access this site')
    }
    else{
        next()
    }
}


// app.get('/',reqFilter, (req, res)=>{
//     const user = {
//         name: "ben",
//         email: "ben@test.com"
//     }
//     res.render('practise', {user})
// })
// app.get('/about', (req,res)=>{
//     res.send('about page')
// })

const route = express.Router()  //**** */
route.use(reqFilter)  //**** */
app.get('/', (req, res)=>{   /*** */
    const user = {
        name: "ben",
        email: "ben@test.com"
    }
    res.render('practise', {user})
})
route.get('/about', (req,res)=>{
    res.send('about page')
})

app.use('/', route) //*** */

app.listen(5000)