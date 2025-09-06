import React, { useState } from 'react'
import Input from '../../components/PrimaryComponent/Input/Input.jsx'
import Button from '../../components/PrimaryComponent/Button/Button.jsx'
import './SignUp.css'
import axios from 'axios'
import {toast} from 'react-toastify'

const SignUp = () => {

    const [userdetail, setuserdetail] = useState({
        username: "",
        email:"",
        password:""
    })


    const handleinputchange = (e) => {
        console.log(e.target.value, e.target.name);
        const name = e.target.name;
        const value = e.target.value
        setuserdetail({...userdetail,[name]:value})

    }

    const Register = () => {
        axios.post("http://localhost:8007/user/signup", userdetail)
        .then((res)=> {
            console.log(res)
            toast.success(res.data?.message)
        }) .catch ((err) => {
            console.log(err)
            let errormessage = err.response.data?.message
            toast.error(errormessage)
        })
    }

  return (
    <div>
    <div className='w-5 mx-auto py-3 px-5'>
      <h1 className='text-center mt-3'>Sign up</h1>
      <Input name={"username"} placeholder={"Enter a Username"} type={"text"} style={"form-control mt-3"} onChange={handleinputchange}/>
      <Input name={"email"} placeholder={"Enter your Email"} type={"email"} style={"form-control mt-3"} onChange={handleinputchange}/>
      <Input name={"username"} placeholder={"Create your Password"} type={"password"} style={"form-control mt-3"} onChange={handleinputchange}/>
      <Button text={"Sign Up"} style={"btn btn-primary mt-3"} onClick={Register}/>
    </div>
  </div>
  )
}

export default SignUp
