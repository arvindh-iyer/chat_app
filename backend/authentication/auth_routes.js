const express=require('express')
const router=express.Router()
const login_user=require('./login_user')
const signup_user=require('./signup_user')

router.post('/login',login_user)
router.post('/signup',signup_user)

module.exports=router