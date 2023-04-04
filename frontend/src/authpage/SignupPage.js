import { Button } from "@mui/material";
import React, { useState } from "react";
import { CustomAuthButton, CustomTextField } from "../styles";
import { useNavigate } from "react-router-dom";

export const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [incorrect, setIncorrect] = useState(false);
  const navigate = useNavigate();

  async function submitSignup() {
    let ans = await fetch("http://localhost:5000/authpage/signup", {
      method: "post",
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    ans = await ans.json();
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
        label="name"
        onChange={(e) => setName(e.target.value)}
      ></CustomTextField>

      <CustomTextField
        label="email"
        onChange={(e) => setEmail(e.target.value)}
      ></CustomTextField>

      <CustomTextField
        label="password"
        onChange={(e) => setPassword(e.target.value)}
      ></CustomTextField>

      <CustomAuthButton onClick={submitSignup}>SignUp</CustomAuthButton>
    </div>
  );
};
