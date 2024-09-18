const grievances = require('../models/grievanceModel')



exports.addgrievanceController = async (req,res)=>{
    console.log("inside add grievance function");
    const {uname,email,contact,description} = req.body
    const date = Date.now()
    console.log(date);
    console.log(uname,email,contact,description);

try{
    console.log("inside try");
   //email is in mongodb users
   const existingUser = await grievances.findOne({email})
   console.log(existingUser);
   if(existingUser){
    //already a user
   
    console.log(existingUser);
    res.status(406).json("Your Complaint Successfully Added")
   }else
   {
    // add //register user :create object for your model
    const newUser = new grievances({
        uname,email,contact,description,date
    })
    console.log(newUser);
     //update mongodb from model
     await newUser.save()
     console.log(newUser);
     res.status(200).json(newUser)

   }
}catch(err){
    res.status(401).json(err)
}


}

//get griebvance in dashboard
exports.getdashboardGrievance = async (req,res)=>{
    console.log("inside getGrievance");
    try{
        const dashboardgrievance = await grievances.find()
        console.log(dashboardgrievance);
        res.status(200).json(dashboardgrievance)
    }catch(err){
        res.status(401).json(err)
    }
}