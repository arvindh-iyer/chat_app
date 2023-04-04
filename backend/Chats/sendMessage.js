const Chats=require('../Models/chats')
const Users=require('../Models/users')
const verifyJwt=require('../verifyJwt')

const sendMessage=async(req,res)=>{
    //console.log('into sendmessage js')
    const {token,message,receiver}=req.body
    const decoded=verifyJwt(token)
    //console.log(decoded)
    const sender=await Users.findOne({_id:decoded.id})
    //console.log(`sender is ${sender}`)
    const receiver_user=await Users.findOne({_id:receiver._id})
    //console.log(`receiver is ${receiver_user}`)
    const createMessage=Chats.create({sender:sender._id,message:message,receiver:receiver_user._id})
    if(!createMessage) throw new Error("message could not be send")
    res.send({staus:"success"})
}

module.exports=sendMessage