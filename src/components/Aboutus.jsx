import React from 'react'
import { useNavigate } from 'react-router-dom'

const Aboutus = () => {
    const navigate = useNavigate();
  return (
    <>
    <center><h1> About Us </h1></center>
      <button onClick={()=>{
                navigate("/");
            }}>GO BACK</button>
    </>
  )
}

export default Aboutus;