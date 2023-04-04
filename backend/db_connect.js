const mongoose=require('mongoose')

const db_connect=async()=>{
    await mongoose.connect('mongodb://127.0.0.1:27017/new_chat')
    console.log('successfully connected to the database')
}

module.exports=db_connect