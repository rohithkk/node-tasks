//CRUS Operations
const mongodb = require('mongodb');


//get{ the MongoClient
const {MongoClient, ObjectID} = mongodb;
const dbUrl = 'mongodb://127.0.0.1:27017';
const dbName = 'task-mgr';

//connect to the DB server
MongoClient.connect(dbUrl, { useNewUrlParser: true}, (error, client)=>{

    if(error){
        console.log(`Unable to connect to the DB. Reason - ${error}`);
        return;
    }

    const db = client.db(dbName);

    let promise = db.collection('users').updateOne(
        {_id: new ObjectID('5cb24cb67dc7c833a87660cb')}, 
        {
            $set:{
                name: 'Rohith'
            },

            $inc:{
                age: 1
            }
        }
    );

    promise.then((result) => {

        console.log(`successfully updated the record. result - ${result}`);

    }).catch((e) => {
        console.log(`failed to update document. reason - ${e}`);
    });


    db.collection('tasks').updateMany(
        {completed: true},
        {
            $set:{
                completed: false
            }
        }
    ).then((result) => {
        console.log(`successfully matched ${result.matchedCount} records and updated ${result.modifiedCount} records`);
    }).catch((error) => {
        console.log(error);
    })

});