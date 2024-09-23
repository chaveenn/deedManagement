const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const lawyerSchema = new Schema({
    firstName: {
        type: String, 
        required: true
    },
    
    lastName: {
        type: String, 
        required: true
    },

    address: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true, // Ensure unique email addresses
        match: /.+\@.+\..+/ // Basic email format validation
    },
    
    userType: {
        type: String,
        required: true,
        enum: ['Lawyer'] // Ensure the userType is 'Lawyer'
    },

    phoneNumber: {
        type: String,
        required: true,
        unique: true // Ensure unique phone numbers
    },

    education: {
        type: String,
        required: true
    },

    temporaryPassword: {
        type: String,
        required: false // Make this optional if not needed
    },

    profilePicture: {
        type: String, // URL or path to the profile picture
        required: false // Make this optional
    }
}, {
    timestamps: true // Automatically manage createdAt and updatedAt fields
});

const Lawyer = mongoose.model("Lawyer", lawyerSchema);

module.exports = Lawyer;