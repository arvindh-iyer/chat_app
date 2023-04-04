
import { AppBar, Stack, Switch, ThemeProvider, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import {CustomAppBar} from '../styles.js'
import { ThemeContext } from '../ThemeContext'
import {theme,darkTheme} from '../theme'
import {MainPage}from './components/MainPage'
import { NewMainPage } from './components/NewMainPage.js'
import {useNavigate} from 'react-router-dom'

export const Chatpage=()=>{

  const {mode,toggleMode}=useContext(ThemeContext)
  const [name,setName]=useState()
  const navigate=useNavigate()
  const token=localStorage.getItem('token')

  useEffect(()=>{
    (async()=>{
      let n=await fetch('http://localhost:5000/chatpage/profileName',{
      method:'post',
      body:JSON.stringify({token}),
      headers:{
        'Content-Type':'application/json'
      }
    })
    n=await n.json()
    console.log(n)
    setName(n.name)
    })()
  },[])

  return(
      /*<AppBar sx={{backgroundColor:mode==="light" ? theme.palette.primary[500] : darkTheme.palette.primary[500],
                  color : mode==="light" ? theme.palette.secondary[500] : darkTheme.palette.secondary[500]}}>
        <Typography>blah blah blah</Typography>
        <Switch onChange={toggleMode}></Switch>
      </AppBar>*/
      
      <div>
        <Stack direction='column' spacing={0} margin={0}>
        <CustomAppBar sx={{display:'flex',flexDirection:'row',alignItems:'center',position:'relative'}}>
        Blah Blah Blah
        
          <Switch onChange={toggleMode}></Switch>

          <div style={{position:'absolute',right:'10px'}}>
          {`hello ${name}`}
        </div>
        </CustomAppBar>

        <NewMainPage></NewMainPage>
        </Stack>
      </div>
      


  )
}
