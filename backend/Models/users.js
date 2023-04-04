const mongoose=require('mongoose')

const schema=new mongoose.Schema({
    name:String,
    email:String,
    password:String
},{collection:'users'})

const users=mongoose.model('users',schema)

module.exports=users