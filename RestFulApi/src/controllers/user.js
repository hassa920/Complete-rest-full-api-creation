const Student = require("../Models/student");




function createUser(req,res){
    console.log(req.body);
    const user=new Student(req.body)
    user.save().then(()=>{
        res.status(201).send(user)
    }).catch((e)=>{
        res.status(400).send(e)
    })
   
}

async function getUsers (req,res){
    try{
      const studentsData= await Student.find();
      res.send(studentsData);
    }
    catch(e){
      if (e.message === 'Session expired') { // or any other error message you want to check for
        return res.status(401).send('Session expired. Please login again.');
      } else {
        res.send(e);
      }
    }
  }

async function getUsersById(req,res){
    try{
        const _id=req.params.id;
        const studentData= await Student.findById(_id);
        if(!studentData){
            res.status(404).send()
        }
        else
        {
            res.send(studentData);
        }
        
    }
    catch(e){
        res.status(500).send(e)
    }
   
}
async function updateUsersField(req,res){
    try{
        const _id=req.params.id;
        const studentUpdatedData= await Student.findByIdAndUpdate(_id,req.body,{
            new:true
        });
        if(!studentUpdatedData){
            res.status(404).send()
        }
        else
        {
            res.send(studentUpdatedData);
        }
        
    }
    catch(e){
        res.status(400).send(e)
    }
   
}
async function deleteUerById(req,res){
    try{
        const _id=req.params.id;
        const deleteData= await Student.findByIdAndDelete(_id);
        if(!req.params.id){
            res.status(404).send()
        }
        else
        {
            res.send(deleteData);
        }
        
    }
    catch(e){
        res.status(500).send(e)
    }
   
}
module.exports={
    createUser,
    getUsers,
    getUsersById,
    updateUsersField,
    deleteUerById

}