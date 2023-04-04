const User=require('../Models/users')
const bcrypt=require('bcrypt')
const generateToken=require('./generateToken')

const login_user=async(req,res)=>{
    //console.log('into login user')
    let body=await req.body
    //console.log(body)
    const email=body.email
    //console.log(email)
    const user=await User.findOne({email})
    if(!user){
        throw new Error("incorrect email")
    }
    const ans=await bcrypt.compare(body.password,user.password)
    if(!ans){
        throw new Error("incorrect password")
    }
    //console.log('login successfull')
    res.send({
        token:generateToken(user._id,user.name)
    })

}

module.exports=login_user