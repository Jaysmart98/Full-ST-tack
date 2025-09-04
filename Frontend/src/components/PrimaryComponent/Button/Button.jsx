import React from 'react'
import { useState } from 'react'

const Button = ({bgColor, colorParams, text, setMint=()=>{}}) => {

  const [divBG, setDivBG] = useState("white")

  return (
    <div style={{background:divBG}}>
      <button style={{background:bgColor, color: colorParams, margin: "5px"}} onClick={()=> setMint("Child")}  setDivBG={setDivBG} >{text}</button>
    </div>
  )
}

export default Button
