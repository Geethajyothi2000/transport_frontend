import React from 'react'
import { useNavigate } from 'react-router-dom'

const Aboutus = () => {
    const navigate = useNavigate();
  return (
    <>
          <section id="About Us">
        <div class="container mt-4 pt-4"/>
            <h1 class="text-center">About Us</h1>
            <div class="row mt-4">
                <div class="col-lg-4">
                    <img src="https://tse2.mm.bing.net/th?id=OIP.VcBhkVF91iUeZJSx8wfUxwHaEP&pid=Api&P=0&h=180" class= "imageAboutPage" alt=""/>
                </div>
      
                <div class="col-lg-8">
                    <p>A vehicle (from Latin vehiculum)[1] is a machine designed for self propulsion, usually to transport people or cargo, or both.
                         Vehicles include wagons, bicycles, motor vehicles (for example, motorcycles, motor cars, trucks, buses and powered wheelchairs
                          and scooters for disabled people), 
                         railed vehicles (trains, trams), watercraft (ships, boats, underwater vehicles), amphibious vehicles (screw-propelled vehicles, hovercraft),
                         aircraft (planes, helicopters, aerostats) and spacecraft.[2]
                        
                    </p>
                    <div class="row mt-3">
                        <p> 
                        Land vehicles are classified broadly by what is used to apply steering and drive forces against the ground:
                         wheeled, tracked, railed or skied. ISO 3833-1977 is the standard, also internationally used in legislation,
                         for road vehicles types, terms and definitions.[3]
                        </p>
                    </div>
                </div>
            </div>
            <button className='btn' onClick={()=>{
                navigate("/");
            }}>GO BACK</button>
      </section>
    </>
  )
}

export default Aboutus