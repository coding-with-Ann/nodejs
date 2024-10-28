//middleware from another file

module.exports = reqFilter = (req, res, next)=>{
    if(!req.query.age){
        res.send('Please provide age')
    }
    else if(req.query.age<18){
        res.send("sorry! you can't access this page")
    }
    else{
        next()
    }
}