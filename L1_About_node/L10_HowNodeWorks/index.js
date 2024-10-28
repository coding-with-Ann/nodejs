//Lets see what happens between code execution and getting output in node
//Architecture consists of call stack, node API, callback queue.
//All this process is called "event loop" because it works in the form of a loop, like
//call stack, node api, callback queue, call stack.....

//When we execute code first the main fn gets registered in call stack.
//Then the remaining fns gets registred above main fn in call stack.
//Main fn execution finishes after all fns are executed.


console.log("starting up")
setTimeout(()=>{
    console.log("2 seconds log")
},2000)

setTimeout(()=>{
    console.log("0 seconds log")
},0)

console.log("finishing up")

//first starting up, next finishing up then 0ms finally 2ms gets executed.
//0ms doesn't execute after starting up execution because setTimeOut is inherited from c++
//The fns that are inherited from c, c++ gets registered in Node API
//So in this code 2ms and 0ms gets stored in node API
//Now the console moves to finishing up
//0ms is less than 2ms so it goes first into callback queue, stays there until main completes execution.
//After main fn executes completely, 0ms callback fn goes to call stack and gets executed
//Then 2ms api comes into callback queue and gets executed in call stack.


