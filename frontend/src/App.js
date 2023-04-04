import React, { useEffect } from "react";
import { Chatpage } from "./chatpage/chatpage";
import { theme, darkTheme } from "./theme";
//import './App.css'
import { ThemeContext, ThemeProvider } from "./ThemeContext";
import { useContext } from "react";
import { Stack } from "@mui/material";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthPage } from "./authpage/AuthPage";
import { ChatProvider } from "./chatContext";

function App() {
  const { mode, toggleMode } = useContext(ThemeContext);
  return (
    <ThemeProvider theme={mode === "light" ? theme : darkTheme}>
      <ChatProvider>
        <Routes>
          <Route path="/chatpage" element={<Chatpage></Chatpage>}></Route>
          <Route path="/" element={<AuthPage></AuthPage>}></Route>
        </Routes>
      </ChatProvider>
    </ThemeProvider>
  );
}

export default App;
