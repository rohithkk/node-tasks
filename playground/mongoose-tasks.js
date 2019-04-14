const mongoose = require('mongoose');

const dbUrl = 'mongodb://127.0.0.1:27017/task-mgr-api';

mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useCreateIndex: true
});

const Task = mongoose.model('Task', {

    description: {
        type: String
    },
    completed: {
        type: Boolean
    }
});

let cleanDishes = new Task({
    description: 'Clean Dishes',
    completed: false
});

cleanDishes.save().then( (result) => {
    console.log(`successfully saved task. ${result}`)
}).catch((ex) => {
    console.log(`failed to save task. reason  - ${ex}`)
});

