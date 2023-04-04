import { Button, Card, Drawer, IconButton, Paper, styled, TextField, Typography, useMediaQuery } from "@mui/material";
import {AppBar} from "@mui/material";
import { green } from "@mui/material/colors"
import { useContext } from "react";
import {theme} from './theme';
import { ThemeContext } from "./ThemeContext";
import { darkTheme } from "./theme";
import { KeyboardReturnSharp } from "@mui/icons-material";
import NightlightIcon from '@mui/icons-material/Nightlight';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { dark } from "@mui/material/styles/createPalette";
import { hover } from "@testing-library/user-event/dist/hover";


//const theme=useTheme()
//const ans=useMediaQuery(theme.breakpoints.up('tablet'))
//this can be used to conditionally render a component if ans equals true

export const CustomAppBar=styled(AppBar)(()=>{
    const {mode,toggleMode}=useContext(ThemeContext)

    return(
        {   
            
            
            boxShadow:21 ,
            
            backgroundColor:mode==="light"?theme.palette.primary.main : darkTheme.palette.primary[700],

            color:mode==="light"?theme.palette.secondary[700]: darkTheme.palette.secondary.main,
    
            [theme.breakpoints.up('xs')]:{
                height:'4vh',
                fontSize:'3vh',
               
            },

            [theme.breakpoints.up('sm')]:{
                height:'5vh',
                fontSize:'4vh',
              
            },
            
            [theme.breakpoints.up('md')]:{
                height:'6vh',
                fontSize:'5vh',
                
            },

            [theme.breakpoints.up('lg')]:{
                height:'7vh',
                fontSize:'6vh'
            }
            
    
        })
    

})


export const CustomDiv=styled('div')(()=>{
    const {mode,toggleMode}=useContext(ThemeContext)

    return{
        position:'absolute',
        //overflow:'scroll',

        //height:'93vh',

        width:'25vw',
        backgroundColor:mode==="light"?theme.palette.primary.dark : darkTheme.palette.primary[700],

        color:mode==="light"?theme.palette.secondary[700]: darkTheme.palette.secondary.main,
    }

})

export const CustomCard=styled(Card)(()=>{
    const {mode,toggleMode}=useContext(ThemeContext)

    return{
        backgroundColor:mode==="light"?theme.palette.secondary[300]: darkTheme.palette.primary[600],

        fontSize:'2vw',

        color:mode==="light"?theme.palette.secondary[700]: darkTheme.palette.secondary.main,

        [theme.breakpoints.up('xs')]:{
            height:'5vh'
        },

        [theme.breakpoints.up('sm')]:{
            height:'7vh'
        },
        
        [theme.breakpoints.up('md')]:{
            height:'8vh'
        },

        [theme.breakpoints.up('lg')]:{
           height:'10vh'
        },

        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        
        boxShadow:'10px',

    }

})


export const CustomMessageStyle=styled('div')(()=>{
    const {mode,toggleMode}=useContext(ThemeContext)

    return{
        position:'absolute',
        right:'0',
        borderLeftStyle:'solid',
        borderLeftColor:mode==="light" ? theme.palette.primary.dark: darkTheme.palette.primary[500],
        height:'10vh',

        [theme.breakpoints.up('xs')]:{
            top:'7vw',
            
        },

        [theme.breakpoints.up('sm')]:{
            top:'6vw'
        },
        
        [theme.breakpoints.up('md')]:{
            top:'5vw'
        },

        [theme.breakpoints.up('lg')]:{
           top:'4vw'
        },

        width:'75vw',
        overflow:'scroll',
        
        
        backgroundColor:mode==="light"?theme.palette.primary.main : darkTheme.palette.primary[500],

        color:mode==="light"?theme.palette.secondary[700]: darkTheme.palette.secondary.main,
    }

})


export const StyledPermDrawer=styled(Drawer)(()=>{
    const {mode,toggleMode}=useContext(ThemeContext)

    return{
        backgroundColor:mode==="light" ? theme.palette.primary.main: darkTheme.palette.primary[500],

        color:mode==="light" ? theme.palette.secondary[500] : darkTheme.palette.secondary.main,
        
        width:'250px'
        
    }
})


export const CustomGrid1=styled('div')(()=>{
    const {mode,toggleMode}=useContext(ThemeContext)

    return{
        backgroundColor:mode==="light" ? theme.palette.primary.main: darkTheme.palette.primary[500],

        color:mode==="light" ? theme.palette.secondary[700] : darkTheme.palette.secondary.main,
        
        [theme.breakpoints.up('xs')]:{
            height:'96vh'
        },
        [theme.breakpoints.up('sm')]:{
            height:'95vh'
        },
        [theme.breakpoints.up('md')]:{
            height:'94vh'
        },
        [theme.breakpoints.up('lg')]:{
            height:'93vh'
        }
    }
})


export const CustomGrid2=styled('div')(()=>{
    const {mode,toggleMode}=useContext(ThemeContext)

    return{
        backgroundColor:mode==="light" ? theme.palette.secondary[300]: darkTheme.palette.primary[700],

        color:mode==="light" ? theme.palette.secondary[700] : darkTheme.palette.secondary.main,

        //height:'calc(100vh - 38px)',
        //overflowY:'scroll'
        [theme.breakpoints.up('xs')]:{
            height:'96vh'
        },
        [theme.breakpoints.up('sm')]:{
            height:'95vh'
        },
        [theme.breakpoints.up('md')]:{
            height:'94vh'
        },
        [theme.breakpoints.up('lg')]:{
            height:'93vh'
        }
       
    }
})


export const CustomSearchOutline=styled(Paper)(()=>{
    const {mode,toggleMode}=useContext(ThemeContext)

    return{
        backgroundColor:mode==="light" ? theme.palette.primary.main: darkTheme.palette.primary[500],

        color:mode==="light" ? theme.palette.secondary[700] : darkTheme.palette.secondary.main,

        
        marginBottom:'20px',
        width:'60vw',
        
        [theme.breakpoints.up('xs')]:{
            height:'5vh'
        },

        [theme.breakpoints.up('sm')]:{
            height:'7vh'
        },
        
        [theme.breakpoints.up('md')]:{
            height:'8vh'
        },

        [theme.breakpoints.up('lg')]:{
           height:'10vh'
        },

        borderRadius:'10px',

        display:'flex',
        flexDirection:'row',
        padding:'10px',
        alignItems:'center',
        paddingLeft:'15px'
    }
})


export const CustomSearchBar=styled(TextField)(()=>{
    const {mode,toggleMode}=useContext(ThemeContext)

    return{
        width:'53vw',
        backgroundColor:mode==="light"? theme.palette.secondary[300]: darkTheme.palette.primary[700],
        '& .MuiInputBase-input': {
            color: mode==="light"? theme.palette.secondary[800]: darkTheme.palette.secondary.main,

            fontSize:'2vw',
            paddingTop:'0.5px',
            paddingBottom:'0.5px'
          },
        borderRadius:'10px',
    }
})


export const CustomAuthDiv=styled('div')(()=>{
    const {mode,toggleMode}=useContext(ThemeContext)

    return{
        backgroundColor:mode==="light" ? theme.palette.secondary[300] : darkTheme.palette.primary[500],
        height:'100vh',
        width:'100vw',
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }
})

export const CustomAuthCard=styled(Card)(()=>{
    const {mode,toggleMode}=useContext(ThemeContext)

    return{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        
        backgroundColor:mode==="light" ? theme.palette.primary.main : darkTheme.palette.primary[700],

        color:mode==="light" ? theme.palette.secondary[700] : darkTheme.palette.secondary.main,

        width:'50vw',
        height:'70vh',

        [theme.breakpoints.up('xs')]:{
            
            fontSize:'6vw',
           
        },

        [theme.breakpoints.up('sm')]:{
        
            fontSize:'5vw',
          
        },
        
        [theme.breakpoints.up('md')]:{
            
            fontSize:'4vw',
            
        },

        [theme.breakpoints.up('lg')]:{
            
            fontSize:'3vw'
        }
        ,
        [theme.breakpoints.down('sm')]:{
            width:'75vw'
        }

    }
})


export const CustomTextField=styled(TextField)(()=>{
    const {mode,toggleMode}=useContext(ThemeContext)

    return{
        backgroundColor:mode==="light" ? theme.palette.secondary[100] : darkTheme.palette.primary[500],
        width:'40vw',

        [theme.breakpoints.down('sm')]:{
            width:'50vw'
        }

    }
})


export const CustomAuthButton=styled(Button)(()=>{
    const {mode,toggleMode}=useContext(ThemeContext)

    return{
        backgroundColor:mode==="light" ? theme.palette.secondary[200] : darkTheme.palette.primary[500],

        color:mode==="light" ? theme.palette.secondary[900]: darkTheme.palette.secondary.main,

        borderColor:mode==="light" ? theme.palette.secondary[200] : darkTheme.palette.primary[500],

        width:'20vw',

        [theme.breakpoints.down('md')]:{
            width:'24.5vw'
        },
        [theme.breakpoints.down('sm')]:{
            width:'35vw'
        }

    }
})


export const CustomNightLightButton=styled(NightlightIcon)(()=>{
    const {mode,toggleMode}=useContext(ThemeContext)

    return{
        color:mode==="light" ? theme.palette.secondary[700] : darkTheme.palette.secondary.main,

        fontSize:'30px'
    }
})

export const CustomAddChatButton=styled(AddCircleRoundedIcon)(()=>{
    const {mode,toggleMode}=useContext(ThemeContext)

    return{
        color:mode==="light" ? theme.palette.secondary[500]: darkTheme.palette.secondary.main,
        fontSize:'40px'
    }
})

export const CustomIconButton=styled(IconButton)(()=>{
    const {mode,toggleMode}=useContext(ThemeContext)

    return{
        width:'100%',
        color:mode==="light"?theme.palette.secondary[700]:darkTheme.palette.secondary.main
    }
})
