//Template engine is used to make dynamic pages.
//The pages that we create like html pages which contains the content that we create are static pages
//The page that comes from database is called dynamic page. 

// There are alot of template engines but ejs(embedded javascript template) is the 
//mostly used template engine 

const express = require('express')
const app = express()


//To setup dynamic routing we need to tell node.js that we are using ejs
app.set('view engine', 'ejs')
// we are using view engine from ejs package
//Now create a folder with name views
//Then create a file with .ejs extension inside the views folder.
//ejs automatically searches for views

app.get('/profile', (req, res)=>{
    const user = {
        name: 'Ben',
        email: 'ben@test.com',
        country: 'USA',
        skills: ['node', 'js', 'python'] //array of skills

    }
    // To access this user variable in profile.ejs page use  
    res.render('profile', {user})

})


app.get('/login', (req, res)=>{
    res.render('login')
})

app.listen(5000)

//  In profile.ejs page
//  skills.forEach is javascript code but <li> is html so we ended forEach with %>
//  then the item inside <li> is javascript code so we used <%= %>
//  finally  }) belongs to javascript so we used <% %>

//  <% code %> to tell its a javascript code,
//  <%= item %> to print item