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
    <>
     <div className='w-50 mx-auto py-3 px-3'>
        <h1 className='text-center mt-3'>Sign Up</h1>
     <Input sty={"form-control mt-3"} name={"username"} type={"username"} placeholder={"Enter a Username"} label={"Username"} required={true} onChange={handleinputchange}/>
     <Input sty={"form-control mt-3"} name={"email"} type={"email"} placeholder={"Enter your email"} label={"Email"} required={true} onChange={handleinputchange}/>
     <Input sty={"form-control mt-3"} name={"password"} type={"password"} placeholder={"Create a Password"} label={"Password"} required={true} onChange={handleinputchange}/>
     <Button className="btn btn-primary mt-3" bgColor={"Blue"} colorParams={"#ffff"} text={"Sign Up"} setMint={""}/>
     </div>

    </>
  )
}

export default SignUp
