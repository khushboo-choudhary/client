require("dotenv").config();
const mongoose = require("mongoose");

module.exports = ()=>{
   return mongoose.connect("mongodb+srv://khushboo:khushboo321@cluster0.newrd.mongodb.net/crimecheck?retryWrites=true&w=majority");
}