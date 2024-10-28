const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname, "CRUD")
const filePath = `${dirPath}/apple.txt`
// fs.writeFileSync(filePath,`This is a simple text file`)


//To read file
fs.readFile(filePath,'utf8', (err, item)=>{
    console.log(item)
})

//If we dont use utf8 we get output as <Buffer 54 68 69 73 20 69 73 20 61 20 73 69 6d 70 6c 65
//20 74 65 78 74 20 66 69 6c 65>
//Buffer is a temporary memory location, to perform any operation on file system like creating file
//etc, node needs some memory to perform these operations, this memory is called buffer.


//To update content in file
// fs.appendFile(filePath, ' and file name is apple.txt', (err)=>{
//     if(!err){
//         console.log("File is updated")
//     }
// })


//To rename file
// fs.rename(filePath, `${dirPath}/fruit.txt`, (err)=>{    //updating file name to fruit.txt at dirPath
//     if(!err){
//         console.log("file name is updated")
//     }
    
// })


//To delete file
fs.unlinkSync(`${dirPath}/fruit.txt`)   

