//To upload files we need a npm package <npm install multer>

//we can also upload file without using multer but it takes lot of code and multer makes it easy.

const express = require('express')
const app = express()
const multer = require('multer')

const upload = multer({
    storage: multer.diskStorage({
        destination: function(req,file,cb){   //cb means callback

            cb(null,"uploads")   //uploads is the destination folder name, create it in node dir
        },   
        filename: function(req,file,cb){
            cb(null, file.fieldname+"-"+Date.now()+".jpg")
        }
    })
}).single("user_file")
app.post('/upload',upload,(req,res)=>{   //upload is a middleware

    res.send("file uploaded")
})

app.listen(5000)