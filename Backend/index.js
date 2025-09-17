const express = require("express")
const app = express()
require('dotenv').config()
const connect  = require("./database/db.connect")
// const {userModel, usersTodo, usersCommerce} = require("./model/user.model")
const userrouter  = require("./route/user.route")
 const cors = require("cors")
//  app.set("view engine", "ejs")






const port = process.env.PORT || 8007 


// let alltodo = [];
currentUser = ""

app.use(cors({origin:"*"}))
app.use(express.urlencoded({ extended: true }))
app.use("/", userrouter)


connect()

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
  });
