//const mongodb = require
const mongoose = require('mongoose');

//get{ the MongoClient
//const {MongoClient, ObjectID} = mongodb;
const dbUrl = 'mongodb://127.0.0.1:27017/task-mgr-api';

mongoose.connect(dbUrl, {
    useNewUrlParser: true, 
    useCreateIndex: true
});

const User = mongoose.model('User', {
    name: {
        type: String
    },
    age: {
        type: Number
    }
});

const me = new User({name: 'Rohith', age: 31});

me.save().then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})

const sn = new User({name: 'Sneha', age: 'as'});


sn.save().then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})