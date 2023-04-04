const express = require("express");
const app = express();
const authRoutes = require("./authentication/auth_routes");
const chatRoutes = require("./Chats/chatRoutes");
const db_connect = require("./db_connect");
const cors = require("cors");

app.use(cors());
app.use(express.json());
db_connect();
app.use("/chatpage", chatRoutes);
app.use("/authpage", authRoutes);

app.listen(5000, (req, res) => {
  console.log("server started on port 5000");
});
