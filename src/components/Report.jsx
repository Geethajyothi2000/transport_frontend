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

        <button  className="btn"
          onClick={() => {
            navigate("/Transport");
          }}
        >
    TurnOver
        </button>


        <button className="btn"
          onClick={() => {
            navigate("/EmployeeReport");
          }}
        >
      Employereport
        </button>

        <button className="btn"
          onClick={() => {
            navigate("/VehicleReport");
          }}
        >
     VehicleReport
        </button>

        

        <button className="btn"
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
