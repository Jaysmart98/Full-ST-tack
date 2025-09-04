const express = require("express");
const userrouter = express.Router();
const { getlandingpage, getinfo, signup, postsignup, login, postlogin, getdashboard, postdashboard, getedit, postedit, postdeleteTodo, getecommerce, postecommerce, geteditEcommerce, posteditEcommerce, postdeleteProduct} = require("../controller/user.controller")



userrouter.get("/", getlandingpage)
userrouter.get("/info", getinfo)
userrouter.get("/signup", signup)
userrouter.post("/user/signup", postsignup)
userrouter.get("/login", login)
userrouter.post("/user/login", postlogin)
userrouter.get("/dashboard", getdashboard)
userrouter.post("/dashboard", postdashboard)
userrouter.get("/edit/:_id", getedit)
userrouter.post("/edit/:_id", postedit)
userrouter.post("/todo/delete", postdeleteTodo)
userrouter.get("/ecommerce", getecommerce)
userrouter.post("/ecommerce", postecommerce)
userrouter.get("/editEcommerce/:_id", geteditEcommerce)
userrouter.post("/editEcommerce/:_id", posteditEcommerce)
userrouter.post("/delete", postdeleteProduct)

module.exports = userrouter