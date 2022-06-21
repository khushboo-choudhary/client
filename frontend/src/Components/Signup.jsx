
import React, { useState } from 'react'
import axios from "axios";
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../Redux/Action'
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [first_name, setFirstName] = useState("")
  const [last_name, setLastName] = useState("")
  const [phone, setphone] = useState("")
  const[email, setEmail] = useState("")
  const[password , setPassword] = useState("")
  const[confirm_password , setConfirmPassword] = useState("")
 

  const handleRegister = () => {
    const data = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone: phone,
      password: password,
      confirm_password: confirm_password
    }
    console.log("dataaa", data);

    axios.post("http://localhost:5100/signup",data).then((res)=> {dispatch(loginSuccess(res.data));
     if(data.password === data.confirm_password){
      alert("Register Successfully"); navigate("/login")
     }
   else{
    alert("password should same to confirm password");
   }

  }).catch((err)=> console.log(err))
 
    dispatch(Signup(data))
  }

  const handleAddphone = (e) => {
    
    setphone(e.target.value)
  }

  
  return (
    <>
    <h1>Signup</h1><br/>
     <div>
     <label>First Name:</label>&nbsp;
        <input type="text" placeholder='firstName'  onChange={(e)=> setFirstName(e.target.value)}/><br/><br/>
        <label>Last Name:</label>&nbsp;
        <input type="text" placeholder='lastName'   onChange={(e)=> setLastName(e.target.value)}/><br/><br/>
        <label>Email:</label>&nbsp;
        <input type="text" placeholder='email'   onChange={(e)=> setEmail(e.target.value)}/><br/><br/>
        <label>Phone:</label>&nbsp;
        <input type="text" placeholder='phone number' onChange={(e)=> handleAddphone(e)}/><br/><br/>
        <label>Password:</label>&nbsp;
        <input type="text" placeholder='password'  onChange={(e)=> setPassword(e.target.value)}/><br/><br/>
        <label>Confirm password:</label>&nbsp;
        <input type="text" placeholder='confirm password'   onChange={(e)=> setConfirmPassword(e.target.value)}/><br/><br/>
        <button onClick={() => handleRegister()}>signup</button>
      </div>
      </>
  )
}
