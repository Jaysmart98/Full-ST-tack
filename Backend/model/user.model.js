const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    username: { type: String, required: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
const userModel = mongoose.model("User_collection", userSchema);


const userTodo = mongoose.Schema({
    title: { type: String, required: true},
    description: { type: String, required: true},
});
const usersTodo = mongoose.model("Todo_collection", userTodo);


const userCommerce = mongoose.Schema({
    product: { type: String, required: true},
    quantity: { type: String, required: true},
    calculator: { type: String, required: true},
    price: { type: String, required: true},
});
const usersCommerce = mongoose.model("Product_collection", userCommerce);


module.exports = {userModel, usersTodo, usersCommerce}