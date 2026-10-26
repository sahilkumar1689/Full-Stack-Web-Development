const { promises } = require("dns");
const http = require("http");
const PORT = 8080;

// 1. Create Our Simple server which start listing on port:
// http.createServer((req,res)=>{
//     // req is the object in which the client request or metadata is comming:
//     // console.log(req);
//     console.log(req.url,req.method,req.headers);

//     // res is used to gave response to the client:
//     res.end("Hello , Server Starts Serving.");

//     // After running this you clearly see that server run continously but you can also exit from the server manually:
//     process.exit();
// }).listen(PORT,()=>{
//     console.log(`Server Listning on http://localhost:${PORT}`);
// });



// 2. Create a server which set the headers and send the response:

// http.createServer((req,res)=>{
//     console.log(req.url,req.method);

//     // 1. Used to set the headers,first parameter is the statusCode and second is the object which tell which type of data you send it can be "text","text/html","json",etc:
//     // res.writeHead(200,{"Content-Type":"text"});

//     // 2. You Can also set header like this individually:
//     res.setHeader("Content-Type","text/html");
//     res.statusCode = 201;

//     // 3. You can set the content inside the write method(), it is also called server side rendering:
//     res.write(`<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document</title>
// </head>
// <body>
    
//     <h1>Server Is Listning</h1>

// </body>
// </html>`)

//     res.end();
    
// }).listen(PORT,()=>{
//     console.log(`Server Listning on http://localhost:${PORT}`);
// });


// 3. Create a server and creating routing it means create different end points in node.js:

// http.createServer((req,res)=>{
// if(req.url === "/"){
//     res.writeHead(200,{"content-type":"text/html"});
//     res.write(`
//         <h1>Server Start Listning</h1>
//     `);
//     // it is important to return when you create routing to break the flow:
//     return res.end();
// }
// else if(req.url === "/endPoint1"){
//     res.writeHead(200,{"content-type":"text/html"});
//     res.write(`
//         <h1>Point 1</h1>
//         `);
//         return res.end();
// }
// else{
        
//     res.writeHead(404,{"content-type":"text/html"});
//     res.write(`
//         <h1>404 page not found</h1>
//     `);
 
//     return res.end();
// }
    
// }).listen(PORT,()=>{
//     console.log(`Server Listning on http://localhost:${PORT}`);
// })


