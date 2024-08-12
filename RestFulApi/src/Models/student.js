const mongoose=require("mongoose");
const validator=require("validator")


const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:3
    },
    
    email:{
        type:String,
        required:true,
        unique:[true,"Email is not unique"],
        validate(value){
            if(!validator.isEmail(value))
            {
                throw new Error("Please write email in standard form")
            }
        }
    },
   
    
    phone:{
        type:Number,
        unique:true,
       
        required:true
       
    },
   
    address:{
        type:String,
        required:true

    }
})
    
    // we crate collection with th help of models
    
    const Student= new mongoose.model("Detail",studentSchema)
    module.exports=Student;