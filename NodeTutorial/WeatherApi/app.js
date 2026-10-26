const express = require("express");
const app = express();
var weather = require('weather-js');
const PORT = 8080;


app.get("/", (req, res, next) => {

    // Disable caching for this route:
    // Note = 1. Basically when brower try to hit the same end point several times and also the data does'nt modified then browser intead of sending the 200 status code they send the 304 status code which means the data does'nt modified so that browser instead of sending the new data they sending the cache data , in order to reducess the bandwidth.It is not an error, but if you really want they always send the new data with 200 status code then try to implement the following code lines:
    // res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    // res.set('Expires', '-1');
    // res.set('Pragma', 'no-cache');
    
    return weather.find({ search: "Jalandhar,Punjab", degreeType: 'F' }, (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: "Server Error." });
        }
        // console.log(result);

        let newData = {
            name: result[0].location.name,
            temperature:result[0].current.temperature + " F"
        }

        return res.status(200).json(newData);
    });
});


app.listen(PORT,()=>{
    console.log(`Server Start Running On http://localhost:${PORT}`);
});