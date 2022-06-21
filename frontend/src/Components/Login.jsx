import React, { useState } from 'react'
import axios from "axios"
import { useDispatch } from 'react-redux'
import { loginSuccess } from '../Redux/Action'
import { useNavigate } from 'react-router-dom';
export default function Login() {
const dispatch = useDispatch();
const navigate = useNavigate();
  const[email, setEmail] = useState("")
  const[password , setPassword] = useState("")
  
  const handleAdd = () => {
    const data = {
      email,
      password
    }
    console.log(data)
       axios.post("http://localhost:5100/login",data).then((res)=> {dispatch(loginSuccess(res.data));alert("login Successfully"); navigate("/")}).catch((error) => {alert(error.response.data.message)})
  }
  return (
    <div>
      <h1>Login</h1>

      <div>
      <label>Email:</label>&nbsp;
        <input type="text" placeholder='email' onChange={(e)=> setEmail(e.target.value)}/><br/><br/>
        <label>Password:</label>&nbsp;
        <input type="text" placeholder='password' onChange={(e)=> setPassword(e.target.value)}/><br/><br/>
        <button onClick={() => handleAdd()}>Login</button>
      </div>
    </div>
  )
}
