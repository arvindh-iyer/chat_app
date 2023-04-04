const express=require('express')
const router=express.Router()
const displayUsers=require('./displayUsers')
const addNewChat=require('./addNewChat')
const sendMessage=require('./sendMessage')
const sendProfileName=require('./sendProfileName')
const displayMessages=require('./displayMessages')

router.post('/displayUsers',displayUsers)
router.post('/addNewChat',addNewChat)
router.post('/sendMessage',sendMessage)
router.post('/profileName',sendProfileName)
router.post('/displayMessages',displayMessages)

module.exports=router