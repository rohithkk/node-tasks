//CRUS Operations
const mongodb = require('mongodb');


//get the MongoClient
const MongoClient = mongodb.MongoClient;
const dbUrl = 'mongodb://127.0.0.1:27017';
const dbName = 'task-mgr';

//connect to the DB server
MongoClient.connect(dbUrl, { useNewUrlParser: true}, (error, client)=>{

    if(error){
        console.log(`Unable to connect to the DB. Reason - ${error}`);
        return;
    }

    console.log('Successfully Connected to DB')

    //connect to the database.
    const db = client.db(dbName);

    db.collection('users').insertOne(
        {
            'name': 'Rohith', 'age': 31
        }, (error, result) => {
            if(error){
                console.log(`failed to insert document - ${error}`);
                return;
            }
            console.log(result.ops);
    });

    db.collection('users').insertMany(
        [
            {'name': 'Rohith', 'age': 31},
            {'name': 'Sneha', 'age': 28}
        ],
        (error, result)=> {
            if(error){
                console.log(`failed to insert documents - ${error}`);
                return;
            }
            console.log(`Number of docs inserted - ${result.insertedCount}`);
            console.log(`Ids of docs inserted - ${result.insertedIds}`);
               
            });

        }
    );
