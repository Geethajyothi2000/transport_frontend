import React from 'react'
import { useNavigate } from 'react-router-dom'

const Vehicles = () => {
    const navigate = useNavigate();
  return (
    <>
    <center><h1> Vehicles </h1></center>
<ul className='imgcc'>
    <li><img   src='https://tse4.mm.bing.net/th?id=OIP.N_59_Sr1eNaNopcmYXhDngHaE8&pid=Api&P=0&h=180'></img></li>
    <li><img  src='https://tse3.mm.bing.net/th?id=OIP.VIkM2GkWgbX7KcLJv71ZYAHaE6&pid=Api&P=0&h=180'></img></li>
    <li><img  src='https://tse4.mm.bing.net/th?id=OIP.qDYUievYGN9_B9h6GbVdvgHaEA&pid=Api&P=0&h=180'></img></li>
    <li><img  src='https://tse1.mm.bing.net/th?id=OIP.43eYmt8dtjDf4xf7fQ1iwwAAAA&pid=Api&P=0&h=180'></img></li>
    <li><img  src='https://tse3.mm.bing.net/th?id=OIP.MCIEmDjazZp-1WOuGTD3zwHaFy&pid=Api&P=0&h=180'></img></li>
    <li><img  src='https://tse4.mm.bing.net/th?id=OIP.D2B8op5HrUbdAqnSb_b1JQHaGP&pid=Api&P=0&h=180'></img></li>
    <li><img  src='https://tse1.mm.bing.net/th?id=OIP.D52qm5upcQy3Qz5tBWfc4wHaE0&pid=Api&P=0&h=180'></img></li>
    <li><img  src='https://tse1.mm.bing.net/th?id=OIP.4db8FSykvVhnJtG7Jun7AAHaEK&pid=Api&P=0&h=180'></img></li>
    <li><img  src='https://tse2.mm.bing.net/th?id=OIP.-o1bLPMEQHskozzqlu0xUQHaFw&pid=Api&P=0&h=180'></img></li>
    <li><img  src='https://tse1.mm.bing.net/th?id=OIP.6Wa2uTU1MW3Y1PihxFVHkQHaF2&pid=Api&P=0&h=180'></img></li>
      <button className='btn' onClick={()=>{
                navigate("/");
            }}>GO BACK</button>
            </ul>
    </>
  )
}

export default Vehicles;