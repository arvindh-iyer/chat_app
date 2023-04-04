import { createContext, useContext, useState } from "react";

export const ThemeContext=createContext({
    mode:"light",
    toggleMode:()=>{}
})

export const ThemeProvider=({children})=>{
    const [mode,setMode]=useState("light")

    function toggleMode(){
        if(mode==="light") setMode("dark")
        else setMode("light")
    }

    return(
        <ThemeContext.Provider value={{mode,toggleMode}}>
            {children}
        </ThemeContext.Provider>
    )
}

