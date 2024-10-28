//It is an internal module of node js
//used to get os information(like to see RAM, system architecture, platform, hostname)
//while working on project if we want to use different conditions on windows, different
//conditions on linux, different conditions on ubuntu or to get os info then we use this module.

const os = require('os')
// console.log(os)

console.log(os.arch())
console.log(os.freemem()/(1024*1024*1024))   //returns the available RAM left to use in gigabytes
console.log(os.totalmem()/(1024*1024*1024)) //returns total RAM
console.log(os.hostname()) //returns hostname
console.log(os.platform())//returns platform

console.log(os.userInfo())
