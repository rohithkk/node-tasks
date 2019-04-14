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

    db.collection('users').findOne({name:'Rohith'}, (error, result) => {

        if(error){
            console.log(`Unable to retrieve users the DB. Reason - ${error}`);
            return;
        }

        console.log(result);
    });

    db.collection('users').findOne({_id:'5cb24cb67dc7c833a87660cb'}, (error, result) => {

        if(error){
            console.log(`Unable to retrieve users the DB. Reason - ${error}`);
            return;
        }

        //should print null.. we are passing a string value to id field instead of ObjectID
        console.log(result);
    });

    db.collection('users').findOne({_id: new ObjectID("5cb24cb67dc7c833a87660cb")}, (error, result) => {

        if(error){
            console.log(`Unable to retrieve users the DB. Reason - ${error}`);
            return;
        }

        //should print null.. we are passing a string value to id field instead of ObjectID
        console.log(result);
    });


    let cursor = db.collection('users').find({name:'Rohith'});

    cursor.toArray((error, users) => {
        if(error){
            console.log(`Unable to retrieve users the DB. Reason - ${error}`);
            return;
        }

        console.log(users);
    });


    db.collection('tasks').find({completed: false}).toArray((error, tasks) => {

        if(error){
            console.log(`Unable to retrieve tasks from the DB. Reason - ${error}`);
            return;
        }

        console.log(tasks);

    })


});