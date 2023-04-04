import React from 'react'
import { CustomDiv } from '../../styles'
import {Contacts} from './Contacts'
import {Stack} from "@mui/material"
import {CustomMessageScreen} from './CustomMessageScreen'

export const MainPage = () => {
  return (
    <Stack direction='row' spacing={0}>
      <CustomDiv>
        <Contacts></Contacts>      
      </CustomDiv>

      <CustomMessageScreen></CustomMessageScreen>
    </Stack>
    
  )
}
