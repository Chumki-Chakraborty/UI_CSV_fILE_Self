const mongoose=require("mongoose")

const schema=mongoose.Schema

const CsvSchema=new schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    IsVerified:{
        type:Boolean,
        defaut:false,
    }

})

const CsvModel=mongoose.model("user",CsvSchema)
module.exports=CsvModel