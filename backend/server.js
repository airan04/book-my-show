const express=require('express')
const cors=require('cors');
const connectDB = require('./dbConnection');
const Ticket=require('./schema')

const app=express();
app.use(cors());

app.use(express.json())

connectDB()
app.use("api",require("./routes"))


app.listen(8000,()=>{
    console.log("server started")
})

