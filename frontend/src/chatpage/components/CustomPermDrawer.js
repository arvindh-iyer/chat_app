import React from 'react'
import { StyledPermDrawer } from '../../styles'
import { List,ListItem,ListItemButton,ListItemIcon,ListItemText, paperClasses, Toolbar, Typography } from '@mui/material'
import { Inbox,Drafts } from '@mui/icons-material'
import { theme } from '../../theme'

export const CustomPermDrawer = () => {
  return (
    <div>
        <StyledPermDrawer variant='permanent' anchor='left' sx={{zIndex:0,marginTop:'8vw'}}>
            <Typography>gnersfdv.sefd nvkfdnvedslnveodl</Typography>
            <Typography>gnersfdv.sefd nvkfdnvedslnveodl</Typography>
            <Typography>gnersfdv.sefd nvkfdnvedslnveodl</Typography>
            <Typography>gnersfdv.sefd nvkfdnvedslnveodl</Typography>

            <Typography>gnersfdv.sefd nvkfdnvedslnveodl</Typography>
            <Typography>gnersfdv.sefd nvkfdnvedslnveodl</Typography>
            <Typography>gnersfdv.sefd nvkfdnvedslnveodl</Typography>

        </StyledPermDrawer>
    </div>
  )
}
