const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
    res.writeHead(200,{"ContentType":"text/html"});
    res.end("Hello Nodejs World");
}).listen(8080);



http.createServer((req, res) => {
    fs.readFile("example.json", 'utf8', (err, data) => {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Error reading file");
            return;
        }
        try {
            const fileData = JSON.parse(data);
            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify(fileData));
        } catch (parseErr) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Error parsing JSON");
        }
    });
}).listen(8090);


// fs.readFile('example.txt','utf8',(err,data)=>{
//     if(err) console.log("Error:",err);
//     else console.log("Data:",data);
// })
