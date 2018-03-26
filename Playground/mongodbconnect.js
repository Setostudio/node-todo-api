// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

// (url, )
MongoClient.connect(`mongodb://localhost:27017/ToDoApp`, (err, db ) => {
    if (err){
       return console.log("Unable to Connect to the server");
    }
    console.log("Connected to the server");

    // Connect to Data Base:
    // db.collection('Name').insertOne(Somekindofobject);

    // db.collection('ToDos').insertOne({
    //     text: "Some todo list",
    //     completed: "False"
    // }, (err, result) => {
    //     if (err){
    //         return console.log("Unable to insert todo", err);
    //     }
        
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: "Seto",
    //     age: "25"
    // }, (err, result) => {
    //     if (err){
    //         return console.log("Error detected");
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // })

    db.close();
});
