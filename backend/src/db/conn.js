// import { mongoose } from "mongoose";

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/kunaltest",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useCreateIndex:true
}).then(()=>{
    console.log(`connection succesful `);
}).catch((e)=>{
    console.log(`no conection `);
});