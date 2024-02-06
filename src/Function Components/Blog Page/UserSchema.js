const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // heading: {
    //     type: String
    // },
    // categories:{
    //     type:String
    // },
    // body:
    // {
    //     type:String
    // },
    
    name:{
        type:String
    },
    age:{
        type:String
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;


