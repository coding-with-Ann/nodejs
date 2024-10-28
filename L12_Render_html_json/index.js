const express = require('express')
const app = express()

//rendering html data
app.get('', (req, res)=>{
    res.send(`<h1>Rendering html element</h1>
    <a href="/help">help</a>`)
})
app.get('/help', (req, res)=>{
    res.send(`<input type="text" placeholder="name" value="${req.query.name}"></input>
            <button>submit</button>`)
})
app.listen(4000)

//Rendering json data
app.get('/about', (req, res)=>{
    res.send(
        [{name: "Ben", email: "ben@test.com"},
        {name: "gwen", email: "gwen@test.com"}]
    )
})