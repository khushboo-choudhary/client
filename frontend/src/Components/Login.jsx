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
axios.post("https://crimecheckapp.herokuapp.com/login",data).then((res)=> {dispatch(loginSuccess(res.data));navigate("/")}).catch((err)=> console.log(err))
  }
  return (
    <div>
      <div>Login</div>

      <div>
        <input type="text" placeholder='email' onChange={(e)=> setEmail(e.target.value)}/>
        <input type="text" placeholder='password' onChange={(e)=> setPassword(e.target.value)}/>
        <button onClick={() => handleAdd()}>Login</button>
      </div>
    </div>
  )
}
