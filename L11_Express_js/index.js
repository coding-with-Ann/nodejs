//Express js is a framework that works on top of node.js web server functionality to 
//simplify its API's and add new features.
//We can make API's easily with express, routes becomes easy, provies middlewares etc
//To install express <npm install express>


const express = require('express')
const app = express()  //converted to executable
app.get('',(req, res)=>{       //get provides routes, '' means home page
    console.log("data sent by browser ===>>>", req.query.name) //accessing request using req.query.name
    //                                               from client http://localhost:5000/?name=%20mark
    res.send("hello"+req.query.name) 
})                             //sending response to client + ****

app.get('/About',(req, res)=>{       
    res.send("hello, this is is about us page")
})

app.listen(5000)


app.get('/help', (req, res)=>{
    res.send("hello this is help page")
})
