const mongoose=require("mongoose");

// creation of database and connection to mongodb
// end pr dat base ka name likha na or pora url dana ha 
mongoose.connect("mongodb://localhost:27017/my-user-api").then(()=>{console.log("connection Successful")}).catch((err)=>console.log(err))
