import React, { Children, createContext } from 'react'
import { useState } from 'react'

export const ChatContext = createContext({})

export const ChatProvider=({children})=>{
    const [focusChat,setFocusChat]=useState(false)

    return <ChatContext.Provider value={{focusChat,setFocusChat}}>
        {children}
    </ChatContext.Provider>
}
