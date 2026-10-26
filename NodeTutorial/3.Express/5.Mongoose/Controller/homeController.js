const path = require("path");
const Homesnm = require("../Models/Home.schema");
const listedArr = [];

const addHomeController = (req,res,next)=>{
    res.sendFile(path.join(__dirname,"../","Views","Register.html"));
}

const listHomeController = (req,res,next)=>{
    // listedArr.push(req.body.homeName);

    // Add data using the mongoose:

    Homesnm.countDocuments().then(res=>{

        // 1. If you wanna to create an object first then add in the database use save():
        // const homeObj = new Homesnm({
        //     homeName:req.body.homeName,
        //     homeId:res+1,
        // });
    
        // homeObj.save().then(()=>{
        //     console.log("Home Add Successfully.");
        // })
        
        // 2. If you directly wanna to create the object then use insetOne() method:
        Homesnm.insertOne({
                homeName:req.body.homeName,
                homeId:res+1,
            }).then(()=>{
                console.log("Home Add Successfully.");
            })
        
        }).catch(err=>console.log("Error while adding data:",err,message));

    res.sendFile(path.join(__dirname,"../","Views","ListedHome.html"));
}

const defaultController = (req,res,next)=>{
    // console.log(listedArr);

    // It is used to retreive the even id objects:
    // Homesnm.find({homeId:{$mod:[2,0]}}).then(res=>console.log(res)).catch(err=>console.log("Error while fetching data:",err))

    Homesnm.find().then(res=>{
        // console.log(res);
        listedArr.length = 0;
        listedArr.push(...res);
    }).catch(err=>console.log("Error while fetching data:",err))

    // used to get the cookie:
    // console.log(req.cookie);

    // Used to render the dynamic ui using ejs:
    res.status(200).render('welcome',{listedArr}).json({
        status:200,
        message:"Default page"
    })

    // res.sendFile(path.join(__dirname,"../","Views","welcome.html"));
}


module.exports = {listHomeController,addHomeController,defaultController};