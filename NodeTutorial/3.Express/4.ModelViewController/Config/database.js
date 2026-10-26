const mongodb = require("mongodb");

// Create the mongodb Client:
const mongoClient = mongodb.MongoClient;

// Use environment variables for sensitive data
const url ="mongodb+srv://sahilUser:sahilUser@cluster0.w269o3l.mongodb.net/?retryWrites=true&w=majority";

let _db;

const mongoConnect = (callback) => {
    // After that connect with the mongoDb using the connect method:
    mongoClient.connect(url)
        .then(client => {
            console.log('Connected to MongoDB successfully!');
            callback(client);
             _db = client.db("airbnb");
        })
        .catch(err => {
            console.error("Error connecting to MongoDB:", err.message);
            // Don't expose sensitive error details in production
            callback(null);
        });
}

const getDb = ()=>{
    if(!_db) throw new Error("Mongodb Not Connected.");
    return _db;
}


module.exports = {mongoConnect,getDb};