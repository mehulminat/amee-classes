// import {AmeeClass} from "./models/SignUpModels"
const express = require("express");
const app = express();
app.use(express.json())
require("./db/conn.js");
const portNumber=process.env.PORT || 4000;
app.get("/",(req,res)=>{
    res.send("mehul");
});
app.post("http://localhost:4000/signup",(req,res)=>{
    const {fullname , email ,batchcode,pnumber,snumber } = req.body
    AmeeClass.findOne({email:email},(err,AmeeClass)=>{
        if(AmeeClass){
            res.send({message:"User aready there"})
        }else{
            const user = new AmeeClass({

                fullname,
                email,
                batchcode,
                pnumber,
                snumber,
                date
                
            })
            user.save(err=>{
                if(err){
                    res.send(err)
                }else{
                    res.send({
                        message:"succesfully registered"
                    })
                }
            })
        }
    })
})
app.listen(portNumber,()=>{
    console.log(`server is runnging as ${portNumber}`);
});