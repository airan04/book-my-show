const mongoose=require('mongoose')

const connectDB= async()=>{
    try{
       await mongoose.connect('mongodb://localhost:27017/bookMyShow')
       console.log("Connected to the database")
    }catch(err){
        console.log(err)
    }
}

module.exports=connectDB