import React from 'react'
import { useNavigate } from 'react-router-dom'

const Vehicles = () => {
    const navigate = useNavigate();
  return (
    <>
    <center><h1> Vehicles </h1></center>
      <button onClick={()=>{
                navigate("/");
            }}>GO BACK</button>
    </>
  )
}

export default Vehicles;