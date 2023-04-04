import React, { useContext, useEffect, useState } from "react";
import { CustomPermDrawer } from "./CustomPermDrawer";
import { CustomChatScreen } from "./CustomChatScreen";
import { Grid, Stack } from "@mui/material";
import {
  CustomAddChatButton,
  CustomGrid1,
  CustomTextField,
} from "../../styles";
import { CustomCard } from "../../styles";
import { CustomGrid2 } from "../../styles";
import { CustomSearch } from "./CustomSearch";
import { useNavigate } from "react-router-dom";
import { IconButton } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { ChatContext, ChatProvider } from "../../chatContext";
import { CustomIconButton } from "../../styles";

export const NewMainPage = () => {
  const [name, setName] = useState("");
  const [chats, setChats] = useState([]);
  const [newChat, setNewChat] = useState();
  const [newUser, setNewUser] = useState();
  const [toggle, setToggle] = useState(true);
  const navigate = useNavigate();

  const { focusChat, setFocusChat } = useContext(ChatContext);

  useEffect(() => {
    (async () => {
      //console.log('into use effect')
      //console.log(`newuser is ${newUser}`)
      //console.log(`focusChat is ${focusChat}`)
      const token = localStorage.getItem("token");
      //console.log(token)
      if (token === "undefined") {
        navigate("../auth");
        return;
      }

      //setName(token.name)
      let l = [];
      l = await fetch("http://localhost:5000/chatpage/displayUsers", {
        method: "post",
        body: JSON.stringify({ token }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      l = await l.json();
      if (newUser) {
        l.unshift(newUser);
      }
      //console.log(l)
      //console.log(newUser)

      setChats(l);
    })();
  }, [toggle, focusChat]);

  async function handleNewChat() {
    let user = await fetch("http://localhost:5000/chatpage/addNewChat", {
      method: "post",
      body: JSON.stringify({ name: newChat }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    user = await user.json();
    console.log(user);
    setNewUser(user);
    setToggle(!toggle);
    //console.log(newUser)
  }

  return (
    <Grid container>
      <Grid item xs={3.5}>
        <CustomGrid1>
          <Stack direction="column" spacing={2}>
            {newChat && (
              <Stack direction="row" spacing={2}>
                <CustomTextField
                  label=""
                  onChange={(e) => setNewChat(e.target.value)}
                ></CustomTextField>

                <IconButton size="large" onClick={handleNewChat}>
                  <SearchRoundedIcon fontSize="50px"></SearchRoundedIcon>
                </IconButton>
              </Stack>
            )}
            <IconButton onClick={() => setNewChat(!newChat)}>
              <CustomAddChatButton></CustomAddChatButton>
            </IconButton>

            {chats.map((item) => {
              console.log(item);
              return (
                <CustomCard key={item._id}>
                  <CustomIconButton onClick={() => setFocusChat(item)}>
                    {item.name}
                  </CustomIconButton>
                </CustomCard>
              );
            })}
          </Stack>
        </CustomGrid1>
      </Grid>

      <Grid item xs={8.5}>
        <CustomGrid2
          sx={{
            display: "flex",
            flexDirection: "column-reverse",
            alignItems: "center",
          }}
        >
          {focusChat && <CustomSearch></CustomSearch>}
        </CustomGrid2>
      </Grid>
    </Grid>
  );
};
