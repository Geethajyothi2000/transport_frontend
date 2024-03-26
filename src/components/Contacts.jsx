import React from 'react'
import { useNavigate } from 'react-router-dom'

const Contacts = () => {
    const navigate = useNavigate();
  return (
    <>
    <center><h1> Contacts </h1></center>
      <button onClick={()=>{
                navigate("/");
            }}>GO BACK</button>
    </>
  )
}

export default Contacts;