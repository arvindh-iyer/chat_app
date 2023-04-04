const mongoose=require('mongoose')

const schema=new mongoose.Schema({
    message:String,
    sender:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    receiver:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    }
},{collection:'chats',timestamps:true})

const chats=mongoose.model('chats',schema)

module.exports=chats