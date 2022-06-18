
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

    axios.post("https://crimecheckapp.herokuapp.com/signup",data).then((res)=> {dispatch(loginSuccess(res.data));navigate("/login")}).catch((err)=> console.log(err))
 
    dispatch(Signup(data))
  }


  return (
    <>
    <div>Signup</div>
     <div>
        <input type="text" placeholder='firstName' onChange={(e)=> setFirstName(e.target.value)}/>
        <input type="text" placeholder='lastName' onChange={(e)=> setLastName(e.target.value)}/>
        <input type="text" placeholder='lastName' onChange={(e)=> setEmail(e.target.value)}/>
        <input type="text" placeholder='phone number' onChange={(e)=> setphone(e.target.value)}/>
        <input type="text" placeholder='password' onChange={(e)=> setPassword(e.target.value)}/>
        <input type="text" placeholder='confirm password' onChange={(e)=> setConfirmPassword(e.target.value)}/>
        <button onClick={() => handleRegister()}>signup</button>
      </div>
      </>
  )
}
