const bcrypt=require('bcrypt')
const User=require('../Models/users')
const generateToken = require('./generateToken')

const signup_user=async(req,res)=>{
    let body=req.body
    //console.log(body)
    const userExists=await User.findOne({email:body.email})
    //console.log(userExists)
    if(userExists) throw new Error("user already exists")

    bcrypt.genSalt(10,async(err,salt)=>{

        if(salt){
            bcrypt.hash(body.password,salt,async(err,hash)=>{
                if(err) throw new Error("failed to generate hash")

                const user=await User.create({name:body.name,
                email:body.email,
                password:hash})

                if(!user) throw new Error("failed to create the user")

                res.status(200).send({
                    token:generateToken(user._id,user.name)
                })
            })
        }
    })
}

module.exports=signup_user