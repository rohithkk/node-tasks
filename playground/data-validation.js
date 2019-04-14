const mongoose = require('mongoose');
const mongodb = require('mongodb');
const validator = require('validator');

const dbUrl = 'mongodb://127.0.0.1:27017/task-mgr-api';

mongoose.connect(dbUrl, {
    useCreateIndex: true,
    useNewUrlParser: true
});

const User = mongoose.model('User', {
    name: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    age: {
        type: Number,
        validate(value){
            if(value <0)
                throw new Error('Age must be a positive number')
        }
    },
    email: {
        type: String,
        required: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Email is invalid')
            }
        }
    },
    password:{
        type: String,
        required: true,
        minlength: 6,
        trim: true,
        validate(value){
            if(value.includes('password')){
                throw new Error('Password field cannot contain the value password');
            }
        }
    }
});

const me = new User({name: ' Rohith ', age: 30, email: 'rohith@test.com', password: 'asdasdasd'});

me.save().then((result) => {
    console.log(result);
}).catch((e) => {
    console.log(e);
})