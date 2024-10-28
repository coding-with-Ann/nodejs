//when we have multiple routes but we want to apply middleware on only few routes
//then we can use route level middleware.
//Application level middleware gets applied on all routes 
//But route level middleware can be applied on single route, multiple routes and routes in another file.

//To apply middleware on specific route first remove application level route(app.use(reqFilter))   *****
//Then use reqFilter(middleware variable) in the route you want to apply middleware
const express = require('express')
const app = express()
const reqFilter = require('./middleware')



// app.get('/', (req, res)=>{
//     res.send("Welcome, this is home page")
// })

// app.get('/users',reqFilter, (req, res)=>{    //using middleware on single route
//     res.send("This is users page")
// })

// app.get('/about', (req, res)=>{
//     res.send("This is about page")
// })

// app.listen(5000)



//using middleware on multiple routes

const route = express.Router()   //we need Router() method to apply middleware on multiple routes
route.use(reqFilter)             // route.use
app.get('/', (req, res)=>{
    res.send("Welcome, this is home page")
})

app.get('/users', (req, res)=>{    //using middleware on single route
    res.send("This is users page")
})

route.get('/about', (req, res)=>{         //route.get
    res.send("This is about page")
})

route.get('/contact', (req, res)=>{
    res.send("This is contact page")
})
//to apply middleware use route.get, else use app.get  ****

app.use('/', route)    //**** route.use, app.use

app.listen(5000)


//Route level middleware is used to apply middleware on single route, group of routes or all routes.
//App_level_middleware is applied on all routes by default
//route_level_middleware can be applied globally or on single route or group of routes.
