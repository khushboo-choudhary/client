const express = require('express');
const cors = require('cors');
// const  connect  = require('../src/configs/db');
const app = express();
require("dotenv").config();
const connect = require("./configs/db")
const port = process.env.PORT || 5100;


const {signup, login} = require('./controller/user.controller')
// const homeController = require('../src/controller/home.controller');

app.use(express.json());
app.use(cors());
  app.post('/signup', signup)
  app.post('/login', login)
 


// app.use('/home', homeController);


app.listen(port, async() => {
    try {
        await connect();
        // console.log('Listening Port 5000');
    } catch(err) {
        console.log(err.message);
        
    }
    console.log('Listening Port 5000');
})