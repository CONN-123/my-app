import React from 'react'
import { useState } from 'react'
function Card({header,text}) {
  const [open,setOpen] = useState(false)
    return (
    <div>
        <h1>{header}</h1>
        <p>{text}</p>
        <button onClick ={()=> setOpen (!open)} 
        className = {open ? "open":""}>Click me
        </button>
    </div>
  )
}

export default Card