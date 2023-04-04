const Users=require('../Models/users')
const Chats=require('../Models/chats')
const verifyJwt=require('../verifyJwt')

const displayMessages=async(req,res)=>{
    const {senderToken,receiverObject}=req.body
    const decoded_sender=verifyJwt(senderToken)
    const receiver_id=receiverObject._id 
    
    
    let l=await Chats.find({$or:[ {$and: [{sender:decoded_sender.id},{receiver:receiver_id}]}, {$and: [{sender:receiver_id},{receiver:decoded_sender.id}]} ]}).sort({"createdAt":-1})

    for(let i in l){
        let obj=l[i]
        let newObj={}
        newObj.message=obj.message
        if(obj.sender==decoded_sender.id){
            newObj.display=1
        }
        else{
            newObj.display=0
        }
        l[i]=newObj
    }
    //console.log(l)
    res.send(l)
}

module.exports=displayMessages