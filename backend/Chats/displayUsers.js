const Chats = require("../Models/chats");
const Users = require("../Models/users");
const verifyJwt = require("../verifyJwt");

const displayUsers = async (req, res) => {
  const token = req.body.token;
  //console.log(token)
  const decoded = verifyJwt(token);
  //console.log(decoded)
  const user_id = decoded.id;
  //console.log(user_id)
  let l = await Chats.find({
    $or: [{ sender: user_id }, { receiver: user_id }],
  }).distinct("receiver");
  //console.log(l);
  l = l.filter((item) => item != user_id);
  //l=[...new Set(l)]
  console.log(l);

  let u = [];
  for (let ind in l) {
    //console.log(l[id])
    let x = await Users.findOne({ _id: l[ind] });
    console.log(x);
    u.push(x);
  }
  //console.log(u);
  res.send(u);
};

module.exports = displayUsers;
