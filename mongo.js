const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/ANYNAME") // this function recivec call back function
.then(()=>{
    console.log("Connected")
})
.catch(()=>{
    console.log("Not Connected")
})


const newSchema=new mongoose.Schema({

    msg:{
        type:String,
        required:true
    }
})

const collection=mongoose.model("collection", newSchema)

module.exports=collection