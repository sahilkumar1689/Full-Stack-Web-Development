const http = require("http");
const fs = require("fs");

const PORT = 8080;

// 1. Create a input form using the node.js and take user input and try to read that request data and store that data in the file:

// http.createServer((req,res)=>{
//     if(req.url === "/"){
//         res.writeHead(200,{"content-type":"text/html"});
//         res.write(`
//             <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
//   </head>
//   <body>
//     <h1>Form:</h1>
//     <form action="/submitData" method="post">
//       <label for="name" >
//         Enter Name:
//         <input type="text" id="name" name="userName" placeholder="UserName">
//       </label>
//       <br><br>
//       <label for="gender">
        
//         <input type="radio" id="gender" name="gender" value="Male">
//         Male

//         <input type="radio" id="gender" name="gender" value="Female">
//         Female
//       </label>
//       <br><br>
//       <button type="submit">Submit</button>
//     </form>
//   </body>
// </html>
            
//         `)
//         return res.end();
//     }
//     else if(req.url === "/submitData" && req.method.toUpperCase() === "POST"){
//         // 1. Read the chunks:
//         let chunksArr = [];
//         req.on("data",(chunk)=>{
//             console.log("chunks:",chunk);
//             chunksArr.push(chunk);
//         });

//         req.on("end",()=>{
//             // 2. After Reading the chunks convert it into buffer string:
//             const bufferStream = Buffer.concat(chunksArr).toString();
//             console.log("bufferStream:",bufferStream);

//             // 3. After convert into buffer string convert it into redable format:
//             const resp = new URLSearchParams(bufferStream);
//             console.log("resp:",resp);

//             // 4. Convert into javascript Object:
//             let jsonObj = Object.fromEntries(resp);
//             console.log("jsonObj",jsonObj);

//             // 5. Store it into file in json format:
//             fs.writeFileSync("temp.json",JSON.stringify(jsonObj));
//         })

//         res.statusCode = 201;
//         res.setHeader("Content-Type","text/html");
//         res.write(`
//             <h1>Form Submit Successfully.</h1>
//             <a href="/">Click here</a>
//         `)
//         return res.end();
//     }

// }).listen(PORT,()=>{
//     console.log(`Start Listning http://localhost:${PORT}`);
// })



// 2. Create a calculator server in which on home route "/" the user see a welcome message and a link to the go to the calculator page, in the calculator page you need to create two input and button on calculate their sum,When the user click on the add button they basicallly router on the result page where the user result shows in the html format.

const PORT2 = 8085;

http.createServer((req,res)=>{
    if(req.url === "/"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(`
            <h1>WELCOME</h1>
            <a href="/calculator">Click Here To Start Calculator</a>
        `)
        return res.end();
    }
    else if(req.url === "/calculator"){
        res.writeHead(200,{"Content-Type":"text/html"});
        res.write(`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
    <body>
    <h1>Calculator:</h1>
    <form action="/result" method="post">
      <label for="firstVar" >
        Enter A:
        <input type="number" id="firstVar" name="firstVar" placeholder="a" required>
      </label>
      <br><br>
      <label for="secondVal">
         Enter B:
        <input type="number" id="secondVal" name="secondVal" placeholder="secondVal" required>
      </label>
      <br><br>
      <button type="submit">ADD</button>
    </form>
  </body>
</html>`)
        return res.end();
    }
    else if(req.url === "/result" && req.method.toUpperCase() === "POST"){

        let chunksArr = [];
        req.on("data",(chunk)=>{
            console.log(chunk);
            chunksArr.push(chunk);
        });
        req.on("end",()=>{

            const bufferStream = Buffer.concat(chunksArr).toString();
            console.log(bufferStream);

            const parsingObj = new URLSearchParams(bufferStream);
            console.log(parsingObj);
            
            const javascriptObj = Object.fromEntries(parsingObj);
            console.log(javascriptObj);

            let result = 0;
            for(let it in javascriptObj){
                console.log(it);
                result += Number(javascriptObj[it]);
            }

            console.log(result);

            fs.writeFileSync("temp.json",JSON.stringify({result}));

            res.writeHead(200,{"Content-Type":"text/html"});
            res.write(`<p>Your Result is:${result}</p>`);
            return res.end();
        });
    }
    else{
        res.writeHead(404,{"content-type":"text/html"});
        res.write(`
            <h1>404 page not found</h1>
        `);
        return res.end();
    }
}).listen(PORT,()=>{
    console.log(`Start Listning http://localhost:${PORT}`);
});