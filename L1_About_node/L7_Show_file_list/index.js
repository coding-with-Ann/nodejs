const fs = require('fs')
// fs.writeFileSync('apple.txt', 'This is a apple.fruit')
//      This doesn't create the file in sub directory in which we are working currently.
//To solve this we can use path module


const path = require('path')
const dirPath = path.join(__dirname)   /* to create files in another folder give comma and folder name */
// This returns the path of current directory, we use this path to create files in that location.
console.log(dirPath) //prints the path

for(i=0; i<3; i++){
    fs.writeFileSync(`${dirPath}/hello${i}.txt`, `A simple text file`) 
    // slash before file name cos we are creating files in that path***
}


// to see files 
fs.readdir(dirPath,(err, files)=>{   
//          passing directory path, function to displaay all files in that directory
//          readdir to read files in directory, readFile is to read content in a file
    files.forEach(item=>{
        console.log(`file name is ${item}`)
    })
})
