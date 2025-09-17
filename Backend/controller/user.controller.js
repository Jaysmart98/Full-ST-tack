const {userModel, usersCommerce, usersTodo} = require("../model/user.model");
let errormessage = "";
const bcrypt = require("bcryptjs")


const getlandingpage = (req, res) => {
    response.json({
        "Users": [
            {"id":"1", "name":"Ugonna", "age":"12", "food":"Akpu"},
            {"id":"2", "name":"feranmi", "age":"16", "food":"rice"},
            {"name": "Joshua", "age": "12", "food": "rice and beans"},
            {"name": "Adekunle", "age": "13", "food": "bread and beans"},
            {"name": "Kayode", "age": "14", "food": "beans"},
            {"name": "David", "age": "15", "food": "rice"},
            {"name": "Anuoluwapo", "age": "16", "food": "Spaghetti"},
            {"name": "Victoria", "age": "17", "food": "Pasta"}
        ]
    })
    res.render("landing"); 
}

const getinfo = (req, res) => {
    res.render("index", { name: "Lola", gender: "male" })
}


const signup = (req, res) => {
    res.render("signup")
}

const postsignup = async (req, res) => {    
    try {
        console.log(req.body);
        const newuser = await userModel.create(req.body);
        console.log("User created successfully:", newuser);
        if (newuser) {
        res.redirect("/login");
       }

        } catch (error) {
            if (error.message.includes("user_collection validation failed")) {
            errormessage = "Please fill all fields";
            return res.redirect("/signup");
       } 

       const hashedPassword = await bcrypt.hash(password, 10)
       console.log(hashedPassword)

       
         if (error.message.includes("E11000 duplicate key error collection")) {
         errormessage = "Email already exists";
         return res.redirect("/signup");
    }
         console.error("Error creating user:", error);
         res.redirect("/signup");
}
}


const login = (req, res) => {
    res.render("login")
}

const postlogin = async (req, res) => {
    try {
        console.log(req.body);
        const {email, password} = req.body;
        const existingUser = await userModel.findOne({email});
        if (existingUser && existingUser.password === password) {
           console.log("login successful");
            currentUser = existingUser.email;
            res.redirect("/ecommerce");
        } else {
            console.log("Invalid user");
            res.redirect("/login");
        }
    } catch (error) {
        console.error("Error during login:", error);
        res.redirect("/login");
    }
}


const getdashboard = async (req, res) => {
    if (!currentUser) {
        return res.redirect("/login");
    }
    try {
        const alltodo = await usersTodo.find();
        res.render("dashboard", { alltodo });
    } catch (error) {
        console.log(error);
    }
    
}

const postdashboard = async (req, res) => {
    try {
        const item = await usersTodo.create(req.body);
        if (item) {
            console.log("Todo added successfully:", item);
            res.redirect("/dashboard");
        }
    } catch (error) {
        console.log(error);
    }
}

const getedit = async (req, res) => {
    try {
        const {_id} = req.params;
        const onetodo = await usersTodo.findById(_id);
        res.render("edit", { onetodo, _id });
    } catch {
        console.log(error);
    }
}


const postedit =  async(req,res) => {
    try {
        const {_id } = req.params;
        const updatedTodo = await usersTodo.findByIdAndUpdate({_id}, req.body);
            if (updatedTodo) {
                console.log("Todo updated successfully");
              res.redirect("/dashboard");
            }
    } catch (error) {
        console.log(error);
    }
}

const postdeleteTodo = async (req, res) => {
    try {
                const {id} = req.body;
                const deletedTodo = await usersTodo.deleteOne({_id:id});
                if (deletedTodo) {
                    console.log("Todo deleted successfully");
                    res.redirect("/dashboard");
                }
            } catch (error) {
                console.log(error);
            }
}

const getecommerce = async(req, res) => {
    if (!currentUser) {
        return res.redirect("/login");
    }
    try {
        const cart = await usersCommerce.find();
        res.render("ecommerce", { cart });
    } catch (error) {
        console.log(error);
    }
}

const postecommerce = async (req, res) => {
    try {
        const item = await usersCommerce.create(req.body);
        if (item) {
            console.log("Product added successfully:", item);
            res.redirect("/ecommerce");
        }
    } catch (error) {
        console.log(error);
    }
}

const geteditEcommerce = async (req, res) => {
    try {
        const {_id} = req.params;
        const cart = await usersCommerce.findById(_id);
        res.render("edit", { cart, _id });
    } catch {
        console.log(error);
    }
}

const posteditEcommerce =  async(req,res) => {
    try {
        const {_id } = req.params;
        const updatedTodo = await usersCommerce.findByIdAndUpdate({_id}, req.body);
            if (updatedTodo) {
                console.log("Todo updated successfully");
              res.redirect("/ecommerce");
            }
    } catch (error) {
        console.log(error);
    }
}



const postdeleteProduct = async (req, res) => {
    try {
        const {id} = req.body;
        const deletedProduct = await usersCommerce.deleteOne({_id:id});
        if (deletedProduct) {
            console.log("Product deleted successfully");
            res.redirect("/ecommerce");
        }
    } catch (error) {
        console.log(error);
    }
}



module.exports = {getlandingpage, getinfo,
    signup , postsignup, 
    login , postlogin,
    getdashboard, postdashboard,
    getedit, postedit,
    postdeleteTodo,
    getecommerce, postecommerce,
    geteditEcommerce, posteditEcommerce,
    postdeleteProduct
}