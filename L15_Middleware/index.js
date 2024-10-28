//Middlewares are some functions that are used with routes to filter 
//req and resp and to check authentications.
//with middlewares we can access request and response and also modify them.
//we have to check authentication if a user is loged-in or not, we can do that in middleware.
//we can also make changes in req and res from routes but if we have multiple routes and if
// make same changes in every route we have to write the same code multiple times.
// so if we create one middleware we can use that in all routes.


//Middleware Types:
//Application-level middleware
//Route-level middleware
//Error-handling middleware
//Built-in middleware
//Third-party middleware

// Here we used application-level middleware.
//After creating middleware we have to call it using app.use(variableName)

const express = require('express')
const app = express()

//middleware
const reqFilter = (req, res, next)=>{    //middleware uses three parameters req, res, next
    if(!req.query.age){
        res.send("Please provide age")
    }
    else if(req.query.age<18){
        res.send("sorry! You can't access this page")  
    }        //at this point page loads continuously
    else{
        next()   // with next() page stops loading and goes to next step.
    }
    
}

//to call middleware
app.use(reqFilter)


app.get('/', (req, res)=>{    //This is a route
    res.send("Welcome, this is home page")
})


app.get('/users', (req, res)=>{  //This is a route
    res.send("This is users page")
})

app.listen(5000)
