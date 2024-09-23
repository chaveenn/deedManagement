const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const deedSchema = new Schema({
    assignedLawyer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Lawyer",
        required: true
    },
    deedType: {
        type: String,
        required: true
    },
    preRegisteredNo: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    division: {
        type: String,
        required: true
    },
    considerationValue: {
        type: Number,
        required: true
    },
    grantor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Client",
        required: true
    },
    grantee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Client",
        required: true
    },
    deedNo: {
        type: Number,
        required: true
    },
    lawyerFee: {
        type: Number,
        required: true
    },
    taxFee: {
        type: Number,
        required: true
    },
    totalFee: {
        type: Number,
        required: true
    }
},{
    timestamps: true // Automatically manage createdAt and updatedAt fields
});

const Deed = mongoose.model("Deed", deedSchema);

module.exports = Deed;