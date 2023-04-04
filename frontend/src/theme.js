import { createTheme } from "@mui/material";
import { green, grey, pink, red } from "@mui/material/colors";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";


export const theme=createTheme({
    palette:{
        primary:{main:'#FFFFFF'},
        secondary:grey
    }
})

export const darkTheme=createTheme({
    palette:{
        primary:grey,
        secondary:{main:'#FFFFFF'}
    }
})