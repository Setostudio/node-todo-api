// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

// (url, callback)
MongoClient.connect(`mongodb://localhost:27017/ToDoApp`, (err, db ) => {
    if (err){
       return console.log("Unable to Connect to the server");
    }
    console.log("Connected to the server");
    
    // db.collection("ToDos").findOneAndUpdate({
    //     _id : new ObjectID("5ab89af5632cc101c446fdba")
    // }, {
    //     $set: {
    //         completed: "True"
    //     }
    // }, {
    //     returnOriginal: "False"
    // }).then((result) => {
    //     console.log(result);
    // });

     db.collection("Users").findOneAndUpdate({
     _id : new ObjectID("5ab89632564a36123cad8c1b")
    }, {
        $set: {
            name: "Hai"
        },
     $inc : {
            age: 19
        }
    }, {
        returnOriginal: "False"
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});
