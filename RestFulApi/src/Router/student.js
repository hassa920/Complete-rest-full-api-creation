// 1. Create Router 
// 2. define Router 
// 3. part mana app.js ma likha how ha 
const express =require("express");
const router=new express.Router();
const Student = require('../Models/student')
const {createUser,
    getUsers,
    getUsersById,
    updateUsersField,
    deleteUerById
   
}=require("../controllers/user")
// router.get("/",(req,res)=>{
//     res.send("Hellow From My side")
// })
// create a new student
router.post("/student",createUser)
// read the data that is in api
// we use aysn awiat for this 
router.get("/student",getUsers)
// Agr muja siraf aik student ka data chai ha id ka base pr
router.get("/student/:id", getUsersById)
// Hama id ki base pr just aik field ki value update krni ho to
router.patch("/student/:id", updateUsersField)
// Hama id ki base pr just document ko del krna ha 
router.delete("/student/:id",deleteUerById )
module.exports=router;