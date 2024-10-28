//MAKE A SIMPLE API

//First import http module

const http = require('http')
const data = require('./data')
http.createServer((req, res)=>{
    res.writeHead(200,{'content-Type':'application\json'}) 
    //200 is the default status code which indicates success
    //404 indicates page not found
    //content type is json(using json content)
    res.write(JSON.stringify(data))
    //JSON.stringify() static method converts a JavaScript value to a JSON string
    res.end()
}).listen(5000)


//There are several other status codes like 200, 201, 404, every status code has some unique use.

// tested using postman aswell
//postman is used to test and validate API's
//for example if we want to use signup form we can test if its working or not using postman.
//we can send a request with user name password from postman and check if its working.