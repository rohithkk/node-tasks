const mongodb = require('mongodb');

//using object destructuring syntax
const { MongoClient, ObjectID} = mongodb;

const dbUrl = 'mongodb://127.0.0.1:27017';
const dbName = 'task-mgr';


MongoClient.connect(dbUrl, {useNewUrlParser: true}, (error, client) => {

    if(error){
        console.log('Unable to connect to the MongoDB server');
        return;
    }

    const db = client.db(dbName);

    let documentId = new ObjectID();
    console.log(documentId);

    db.collection('tasks').insertMany(
        [
            {description: 'Dial in to WAF call', completed: false},
            {description: 'Go to Office for release', completed: false},
            {description: 'Take Shower', completed: false, _id: documentId}
        ],
        (error, result)=>{
            if(error){
                console.log('Unable to insert documents ');
                return;
            }

            console.log(result.ops);
        }
    )

});