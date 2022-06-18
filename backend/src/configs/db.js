require("dotenv").config();
const mongoose = require("mongoose");

module.exports = ()=>{
   return mongoose.connect("mongodb+srv://khushboo:4KBD2LzXNs36uWFL@cluster0.ehgij.mongodb.net/getup?retryWrites=true&w=majority");
}