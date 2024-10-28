// we can write html code like we did in render_html but it becomes clumsy
//so its good to create a seperate file
//We will create a folder for html files, if we access the folder we can automatically
//access files in it.
const express = require('express')
const app = express()

const path = require('path')
const publicPath = path.join(__dirname, 'public')
// console.log(publicPath)
// app.use(express.static(publicPath)) //static() loads static content like html pages from given path.
// use() is a executed express fn, static() is fn of express.
app.listen(5000)
// To access this html page in browser search localhost:5000/about.html  ****
//To make home page create index.html page
//To get any path use path module
//static() method loads static content or static pages





//REMOVE EXTENSION FROM URL

// We can remove the .html or any other extension from the url, its useful for security reasons.
app.get('/about', (req, res)=>{   //we can change the /about to anyother name and call that in browser ***
    res.sendFile(`${publicPath}/about.html`)
})


// 404 PAGE

app.get('*', (req, res)=>{
//                  * indicates any file that we didn't create.
//If there's any file that we didn't create server would render pageNotFound.html page
    res.sendFile(`${publicPath}/pageNotFound.html`)
})


// so we can load file in get method using sendFile method.