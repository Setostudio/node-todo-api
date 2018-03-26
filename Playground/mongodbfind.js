// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

// (url, callback)
MongoClient.connect(`mongodb://localhost:27017/ToDoApp`, (err, db ) => {
    if (err){
       return console.log("Unable to Connect to the server");
    }
    console.log("Connected to the server");

    // Find (conditions)
    // db.collection("ToDos").find(
    //     {_id: new ObjectID("5ab891c7441a0024fc689fba")}
    // ).toArray().then((docs) => {
    //     console.log("todos");
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log("Unable");
    // });

    // db.collection("ToDos").find().count().then((count) => {
    //     console.log(`todos count ${count}`);
    // }, (err) => {
    //     console.log("Unable", err);
    // });

    db.collection("Users").find({name: "Seto"}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log("Error");
    });

    db.close();
});
