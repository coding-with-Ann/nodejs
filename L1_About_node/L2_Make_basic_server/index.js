//MAKE BASIC SERVER
const http = require('http')
//http module is a core module that handles the servers request and response in node
http.createServer((req, res) => { 
    res.write("hello world!") //we can also write html code instead of hello world
    res.end() //if we dont write end() browser loads continuosly.
}).listen(4500)
//this create server fn takes another fn as a parameter

//req is a callback fn, whenever a request reaches the server this callback fn is executed
    // req argument contains info about incoming requests.
//res is the server response, we use it to build the response that has to be sent back
    // to the client.

