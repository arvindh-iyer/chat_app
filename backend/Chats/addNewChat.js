const User=require('../Models/users')

const addNewChat= async(req,res)=>{
    const name=req.body.name
    const user=await User.findOne({name})
    res.send(user)
}

module.exports=addNewChat