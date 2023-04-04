import { Alert, Button, Snackbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CustomAuthButton, CustomTextField } from "../styles";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [openUsername, setOpenUsername] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);
  const [incorrect, setIncorrect] = useState(false);
  const navigate = useNavigate();

  async function loginSubmit() {
    if (!email) {
      setOpenUsername(true);
      return;
    }
    if (!password) {
      setOpenPassword(true);
      return;
    }
    let ans = await fetch("http://localhost:5000/authpage/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    ans = await ans.json();
    console.log(ans);
    if (!ans) {
      setIncorrect(true);
      return;
    }

    localStorage.setItem("token", ans.token);
    navigate("./chatpage");
  }

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <CustomTextField
        label="email"
        onChange={(e) => setEmail(e.target.value)}
      ></CustomTextField>
      <CustomTextField
        label="password"
        onChange={(e) => setPassword(e.target.value)}
      ></CustomTextField>

      <div style={{ height: "20px" }}></div>
      <CustomAuthButton onClick={loginSubmit}>Login</CustomAuthButton>

      <Snackbar open={openUsername} onClose={() => setOpenUsername(false)}>
        <Alert severity="error">Enter valid username</Alert>
      </Snackbar>

      <Snackbar open={openPassword} onClose={() => setOpenPassword(false)}>
        <Alert severity="error">Enter valid password</Alert>
      </Snackbar>

      <Snackbar open={incorrect} onClose={() => setIncorrect(false)}>
        <Alert severity="error">invalid credentials</Alert>
      </Snackbar>
    </div>
  );
};
