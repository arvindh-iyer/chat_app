import { MessageRounded } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { CustomSearchOutline } from '../../styles'
import { CustomSearchBar } from '../../styles'
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { useState } from 'react'
import { ChatContext } from '../../chatContext'

export const CustomSearch = () => {

  const [message,setMessage]=useState("")
  const {focusChat,setFocusChat}=useContext(ChatContext)
  const [chats,setChats]=useState([{}])
  const token=localStorage.getItem('token')

  useEffect(()=>{
    (async()=>{
      console.log('into useEffect')
      let l=await fetch('http://localhost:5000/chatpage/displayMessages',{
        method:'post',
        body:JSON.stringify({senderToken:token,receiverObject:focusChat}),
        headers:{
          'Content-Type':'application/json'
        }
      })
      l=await l.json()
      setChats(l)
    })()
  },[focusChat])

  async function sendMessage(e){

    if(message==="") return

    let ans=await fetch('http://localhost:5000/chatpage/sendMessage',{
      method:'post',
      body:JSON.stringify({token,message,receiver:focusChat}),
      headers:{
        'Content-Type':'application/json'
      }
    })
    setMessage("")
    ans=await ans.json()
    
    //console.log(ans)


  }
  return (
    <div style={{display:'flex',flexDirection:'column-reverse'}}>
        <div style={{position:'absolute',top:'10vh'}}>
          {focusChat.name}
        </div>

        <CustomSearchOutline>
            <IconButton disabled>
                <MessageRounded fontSize='large'></MessageRounded>
            </IconButton>

            <CustomSearchBar value={message} onChange={e=>setMessage(e.target.value)}></CustomSearchBar>

            <IconButton onClick={e=>sendMessage(e)}>
                <SendRoundedIcon fontSize='large'></SendRoundedIcon>
            </IconButton>
        </CustomSearchOutline>

        <div style={{display:'flex',flexDirection:'column-reverse'}}>
          {chats.map(item=>{
            return(
              <div key={item} style={{
                
              }}>{item.message}</div>
            )
          })}
        </div>
            
        
    </div>
  )
}
