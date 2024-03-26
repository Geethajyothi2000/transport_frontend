import React, { Profiler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import List from "./List";

const Report = () => {
  const navigate = useNavigate();

//   function updateAllData(){
//     axios
//     .get("http://localhost:3001/updateAllData")
//     .then((response) => {
//       console.log(response);
//       alert(response.data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
//   }


  return (
    <>

        <button
          onClick={() => {
            navigate("/Transport");
          }}
        >
         Transport
        </button>


        <button
          onClick={() => {
            navigate("/EmployeeReport");
          }}
        >
      Employereport
        </button>

        <button
          onClick={() => {
            navigate("/Vehicles");
          }}
        >
       Vehicles
        </button>

        

        <button
          onClick={() => {
            navigate("/");
          }}
        >
        Goback
        </button>
    </>
  );
};

export default Report;
