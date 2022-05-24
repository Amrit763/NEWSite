const mongoose = require('mongoose');
// const dbUrl = 'mongodb://localhost:27017/newsSitedb';
const dbUrl = 'mongodb+srv://anilthapa:anilthapa@cluster0.rswqn.mongodb.net/newsite?retryWrites=true&w=majority';

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}, (err, done) => {
    if (err) {
        console.log('Database Connection Failed');
    } else {
        console.log('Database Connection Success');
    }
})