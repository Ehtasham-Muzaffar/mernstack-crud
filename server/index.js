const express = require('express')
const mongoose =require("mongoose")
const cors = require("cors")
const app = express()
const userModel = require("./models/Users")
app.use(cors())
app.use(express.json())


mongoose.connect("mongodb://127.0.0.1:27017/crud").then(() => {
    console.log("Connected to Database");
    }).catch((err) => {
        console.log("Not Connected to Database ERROR! ", err);
    });

app.post("/createUser",(req,res)=>{
    console.log(req.body)
     userModel.create(req.body)
    .then(users  => res.json(users))
    .catch(err => res.json(err))
})

//run server here
app.listen(3001,()=>{
    console.log("server is runinng")
})