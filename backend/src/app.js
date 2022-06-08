
const express = require("express");
const app = express();
require("./db/conn.js");
const portNumber=process.env.PORT || 4000;
app.get("/",(req,res)=>{
    res.send("mehul");
});

app.listen(portNumber,()=>{
    console.log(`server is runnging as ${portNumber}`);
});