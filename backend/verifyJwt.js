const jwt=require('jsonwebtoken')
const verifyJwt=(token)=>{
    const decoded=jwt.verify(token,process.env.JWT_SECRET)
    return decoded
}

module.exports=verifyJwt