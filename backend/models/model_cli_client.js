const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema ({

    fname : {
        type : String,
        required : true
    },
    lname : {
        type : String,
        required : true
    },
    nic : {
        type : Number,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    district : {
        type : String,
        required : true
    },
    province : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

const Client = mongoose.model("Client", clientSchema);
module.exports = Client;
