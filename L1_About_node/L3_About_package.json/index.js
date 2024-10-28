   // ALL ABOUT package.json
// package.json contains the detais about project like project version, name, its git repo
//  different packages inside it etc.
// but not the details like what the project is for and how it works 

// NODE MODULES FOLDER
//When we install any package a modules folder will be created in working directory, all the
// installed packages details can be seen in this folder.
//We might also see some other packages in node modules folder that comes with the packages 
// that we installed, these are the dependent packages for the installed packages.
//In package.json the installed packages can be seen in dependencies.
// If another developer wants to work with this project, to install all packages used in project, 
// he can use the command <npm i>, this will install all the dependencies present in package.json file.

//PACKAGE-LOCK.JSON
// package.lock.json stores the detailed info about the packages that are installed but package.json
// stores only the package name and version of installed packages.

//If we delete package-lock.json nothing goes wrong but we should never delete package.json file
//because we cant know what packages were used, the commands and other details about project.

const colors = require("colors")
console.log("hello".red) //this makes the text color red
console.log("package.json".bgBlue) //sets bg color to blue


//If we delete node modules folder from working directory by mistake we can use the command
// <npm install> to recover the folder. This works because we have the dependencies in package.json

// .gitignore
//We dont need to push node modules folder to github so we can create a .gitignore folder
//in working dir and write /node_modules in that .gitignore file. This saves memory




