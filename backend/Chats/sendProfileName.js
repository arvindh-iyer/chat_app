const verifyJwt=require('../verifyJwt')

const sendProfileName=(req,res)=>{
    const token=req.body.token
    const decoded=verifyJwt(token)
    const name=decoded.name
    res.send({name})
}

module.exports=sendProfileName