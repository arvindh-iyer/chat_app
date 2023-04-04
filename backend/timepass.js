const express=require('express')
const app=express()
const port=5000
const server=app.listen(port,(req,res)=>{
    console.log("listening on port 5000")
})

const io=require('socket.io')(server,{
    pingTimeout:60000,
    cors:{
        origin:'http://localhost:3000'
    }
})

io.on('connection',socket=>{
    //console.log('connected to socket.io')
    socket.on('setup',userData=>{
        socket.join(userData.id)
       console.log(userData)
        socket.emit("connected")
    })
})
