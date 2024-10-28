// Node js is single threaded
//single threaded runs only one command at a time
//multi threaded runs multiple commands simultaneously.

//Node is a javascript run time built on chrome's v8 javascript engine to execute code.
//Node is free, open source and used to make API for web, android, ios etc.
//Node is mostly used for API's so we can connect server with client.
//Node is written in c, c++, javaScript.

//JavaScript and node are almost similiar but not completely, node can connect to database,
// but js can't because js runs on browser while node runs on server side and database is at
// server side too.

a=10
b=20
console.log(a+b)
console.warn(a+b)
console.error(a+b)

// DIFF BTW == AND ===

//  === compares value and its data type but == compares only value

// let a="10"
// if(a===10){
//     console.log("True")
// }
// else{
//     console.log("false")  //since === compares both value and data type false will be printed
// }

//

// let b="10"
// if(b==10){
//     console.log("True")  // == compares only value so prints true
// }
// else{
//     console.log("false")
// }


// import {a} from "./app.js"
//          we can't import like this from a module in node

// const app = require("./app.js")
// console.log(app)
// console.log(app.x, app.y)
// console.log(app.z())


    //CORE MODULES
// They are built-in modules used to conncect to database, create FileSystem, to process code etc 
// console, fs(file system), buffer, HTTP etc are examples of core modules.
// We don't need to import global modules, they can be used anywhere
    //example console
//

// fs.writeFileSync("hello.txt", "Created a file")
    //fs is a non global module of file system, as it is a non global module we will get error, if we 
    //dont import fs module


const fs = require('fs')
fs.writeFileSync("hello.txt", "Created a file")
    //now we imported non global module fs module so file will be created
    //while using any module without importing it, if we get error then its a non global module

console.log(__dirname)
    //prints the present working directory path

console.log(__filename)
    //prints the file name with path


