const path = require("path");
const {getDb} = require("../Config/database");
const listedArr = [];

const addHomeController = (req,res,next)=>{
    res.sendFile(path.join(__dirname,"../","Views","Register.html"));
}

const listHomeController = (req,res,next)=>{
    listedArr.push(req.body.homeName);
    // Adding data in the mongodb:
    const db = getDb();
    db.collection("homes").insertOne(req.body).then(res=>console.log(res)).catch(err=>console.log(err));
    
    res.sendFile(path.join(__dirname,"../","Views","ListedHome.html"));
}

const defaultController = (req,res,next)=>{
    console.log(listedArr);
    
    // 1. Get all Data from the mongodb:
    const db = getDb();
    db.collection("homes").find().toArray().then(res=>{console.log("Homes Response:",res);
       listedArr.length = 0; listedArr.push(...res);})
    .catch(err=>console.log(err));

    // 2. We can also take individual Item:
    // db.collection("homes").find({_id:new ObjectId(String(homeId))}).next().then(res=>{console.log("Homes Response:",res);
    //    listedArr.length = 0; listedArr.push(...res);})
    // .catch(err=>console.log(err));

    // 3. Delete one item:
    //  db.collection("homes").deleteOne({_id:new ObjectId(String(homeId))}).then(res=>{console.log("Homes Response:",res);
    //    listedArr.length = 0; listedArr.push(...res);})
    // .catch(err=>console.log(err));

    // 4. Update one item:
    //  db.collection("homes").updateOne({_id:new ObjectId(String(homeId))},{$set:{updatedObjValue}}).then(res=>{console.log("Homes Response:",res);
    //    listedArr.length = 0; listedArr.push(...res);})
    // .catch(err=>console.log(err));


    // Used to render the dynamic ui using ejs:
    res.render('welcome',{listedArr});
    // res.sendFile(path.join(__dirname,"../","Views","welcome.html"));
}


module.exports = {listHomeController,addHomeController,defaultController};