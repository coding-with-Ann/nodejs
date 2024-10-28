// Input from command line 
// console.log(process.argv) //process is a object that contains almost all info related to node.
//                         //  argv is argument vector
//                         //  It returns two outputs one is node.js file location and another is the
//                         //      path from where we are running this file.
//                         //  Now if we input any value after node L6_Input_from_cmd, we can see it
//                         //      as output
//                         //  These will be stored in the form of array so we have to access these in
//                         //      code using index like argv[0]

// console.log(process.argv[2])


// lets do something practical

// Lets add or remove File
// Then give file a name
// Then add text to file

// To create file we need file system module, its a built-in module
const fs = require('fs')
const input = process.argv
if(input[2]=='add'){
    fs.writeFileSync(input[3], input[4])  //will give input3 and 4 from commandLine
}
else if(input[2]=='remove'){
    fs.unlinkSync(input[3]) //unlinkSync used to delete file, it takes only file name as parameter.
}
else{
    console.log("invalid input")
}

//input[0], input[1] by default contains the path of file and the path from where we are running
//the file.
//input[2] is either add or remove



