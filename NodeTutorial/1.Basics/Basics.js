// 1. Node Js = It is a single threaded,open source,cross platform javascript run time environment, that helps to run the javascript code outside the browser.
// Where the single threaded means that the, node js run only one single line of code at any instance of time in a synchronously,But inorder to handle the multiple asynchronous operation node.js simply follows the event driven approach.
// A event driven approach is simply means that the flow of program is determined by the events like users actions,message from the other programs or any other kind of inputs and it can be managed by the event loop and non blocking I/O operations.
// It was firstly created by the Ryan Dahl and was first released on May 27,2009.


// Node.js Architecture = In include following components and their working:
/*
    1. Requests = Requests are nothing but the users actions that they need perform. It can be of two types blocking and non-blocking.
    2.Node.js server = It accepts the user requests , processes them and return the results.
    3. Event Queue = It is used to store the client requests and pass them one by one to the event loop for execution.
    4. Event Loop = Event loop is the most important components in the node.js architecture, it accepts the requests from the event queue and processes them whether the process is blocking or non blocking, if the request is non-blocking then the event loop execute it immediately and sent the response to the client.But if the request is blocking a single thread is assigned to processes them by using the external resources.And the event loop executing the remaining non-blocking request but when the non-blocking request is completed it redirected to the event loop which further delivers the response to the client.
    5. Thread Pool = It is node js server which contains the threads , it is required to processes the blocking requests.
*/

// Modules = Modules in node.js are the reusable blocks of code that encapsulate various functionalities. Modules includes the function , objects, variables that are exported from the code file.Modules help us to organize the code smaller , manageable pieces of code,making it easier to maintain and reuse.

// Type of Modules:
// 1. Core Modules = It is also called the built in modules,which by default present in the node.js.These modules are used with the help of require() function.Some of them are http,fs,url,fileUpload,etc.

// 2. Local Modules = Local Modules are created in the node.js application by the users,in order to resuse and maintain the code easily.
// "exports" keyword is used to export any function individually or modules.export = {name1,name2,...} are used to export multiple.

// 3. Third Party Modules = These modules are available online and download using the npm commands.These modules are installed in your projects globally.E.g. = Express,Mongoose,Lodash,etc.

// Examples of local Modules = 

const calculator = require("./localModules");

console.log(calculator.add(1,2));
console.log(calculator.add(1,2,3));
console.log(calculator.add(1,2,3,4));
console.log(calculator.add(1,2,3,4,5));

console.log(calculator.sub(1,2));
console.log(calculator.sub(1,2,3));
console.log(calculator.sub(1,2,3,4));
console.log(calculator.sub(1,2,3,4,5));

// import { greet } from "./localModules.js";
// greet();