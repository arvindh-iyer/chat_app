
import { TextField,Card, Switch, ButtonGroup, Button } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { CustomAuthDiv } from '../styles'
import { ThemeContext } from '../ThemeContext'
import { CustomAuthCard ,CustomAuthButton,CustomNightLightButton} from '../styles'

import {IconButton,Icon} from "@mui/material"
import { LoginPage } from './LoginPage'
import { SignupPage } from './SignupPage'
import { Stack } from '@mui/material'

export const AuthPage = () => {
    const {mode,toggleMode}=useContext(ThemeContext)
    const [login,showLogin]=useState(true)

    useEffect(()=>{
        
    },[mode])

  return (
    <CustomAuthDiv>
        
        <CustomAuthCard>
            <Stack direction='column' spacing={2}>
            <div>
                Blah Blah Blah 
                <Switch onChange={toggleMode}></Switch>
                <IconButton disabled>
                    <CustomNightLightButton></CustomNightLightButton>
                </IconButton>
            </div>
            <ButtonGroup>
                <CustomAuthButton onClick={()=>showLogin(true)}>Login</CustomAuthButton>
                <CustomAuthButton onClick={()=>showLogin(false)}>Signup</CustomAuthButton>
            </ButtonGroup>

            {login && <LoginPage></LoginPage>}
            {!login && <SignupPage></SignupPage>}

            </Stack>

        </CustomAuthCard>
        
        
    </CustomAuthDiv>
  )
}
