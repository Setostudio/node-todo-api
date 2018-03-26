// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

// (url, callback)
MongoClient.connect(`mongodb://localhost:27017/ToDoApp`, (err, db ) => {
    if (err){
       return console.log("Unable to Connect to the server");
    }
    console.log("Connected to the server");
    
    // //delete many 
    // db.collection('ToDos').deleteMany({text : "Lunch"}).then((result) => {
    //     console.log(result);
    // });


    //delete one

    // db.collection('ToDos').deleteOne({text: "Lunch"}).then((result) => {
    //     console.log (result);
    // });

    // //find one and delete
    // db.collection('ToDos').findOneAndDelete({completed: "False"}).then((result) => {
    //     console.log(result);
    // });


    // db.close();
});
