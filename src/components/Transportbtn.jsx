import React, { Profiler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import List from "./List";

const Transportbtn = () => {
  const navigate = useNavigate();

  function updateAllData(){
    axios
    .get("http://localhost:3001/updateAllData")
    .then((response) => {
      console.log(response);
      alert(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }


  return (
    <>
      <button  className="btn"
          onClick={() => {
            navigate("/Aboutus");
          }}
        >
         aboutus
        </button>

        <button className="btn"
          onClick={() => {
            navigate("/Vehicles");
          }}
        >
         Vehicles
        </button>



        <button className="btn"
          onClick={() => {
            navigate("/Report");
          }}
        >
        Report
        </button>

        <button className="btn"
          onClick={() => {
            navigate("/Contacts");
          }}
        >
          Contacts
        </button>

        {/* <button onClick={updateAllData}>Update Records</button> */}

    
    </>
  );
};

export default Transportbtn;
