const mongoose = require('mongoose');


const schema = new mongoose.Schema({
    timeStamp:Number,
    email: { 
        type: String, 
     
    } 
})

const VeritySubmission = mongoose.model('VeritySubmission', schema);

module.exports = VeritySubmission;