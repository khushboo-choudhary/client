require("dotenv").config();
const mongoose = require("mongoose");

module.exports = ()=>{
   return mongoose.connect("mongodb+srv://khushi:khushi@cluster0.zymki.mongodb.net/pro?retryWrites=true&w=majority");
}