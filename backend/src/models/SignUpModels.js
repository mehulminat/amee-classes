const mongoose =require('mongoose')
const signUpTemplate = new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    
    email:{
        type:String,
        required:true
    },
    batchcode:{
        type:String,
        required:true
    },
    pnumber:{
        type:String,
        required:true
    },
    snumber:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})
const AmeeClass = new mongoose.model("AmeeClass",signUpTemplate)
module.exports = mongoose.model('AmeeClass',signUpTemplate)
