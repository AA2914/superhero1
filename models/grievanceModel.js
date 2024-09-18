const mongoose = require('mongoose')

const grievanceSchema = new mongoose.Schema({
    uname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    contact:{
        type:Number,
        required:true
    },
    description:{
        type:Array,
        required:true
    },
    date:{
        type:Date,
    }
})

const grievances = mongoose.model("grievances",grievanceSchema)

module.exports = grievances