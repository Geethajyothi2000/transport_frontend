import React, { Profiler, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import List from "./List";

const Transport = () => {
  const navigate = useNavigate();
  const [employeeData, setData] = useState([]);
 var withdr_total = 0;
var withoutdr_total = 0;
var v_total = 0;
  useEffect(() => {
    axios
      .get("http://localhost:3001/employeeData")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [employeeData]);

  return (
    <>
      <center>
      <h3 className="he">
          Report of Annual Emplloyee expenses of ABCD PVT Ltd
        </h3>
        <button
          onClick={() => {
            navigate("/AddData");
          }}
        >
          Add Data
        </button>

      </center>
      <div className="employeeList">
        <div className="employeeData">
          <div id="id" className="bg">id</div>
          <div id="pn" className="bg"> v_no </div>
          <div className="bg"> vname </div>
          <div className="bg"> kmwith_dr</div>
          <div className="bg">  with_dr_rent </div>
          <div className="bg">  withdr_total </div>
          <div className="bg"> kmwithout_dr </div>
          <div className="bg"> withoutdr_rent </div>
          <div className="bg">  withoutdr_total </div>
          <div className="bg"> v_total </div>
          
        </div>
       
        {employeeData.map((employee) => {
          {withdr_total = employee.kmwith_dr * employee.with_dr_rent}
       {withoutdr_total = employee.kmwithout_dr * employee.withoutdr_rent}
       {/* {v_total = withdr_total +  withoutdr_total } */}
          return (  
            <List
              key={employee.id}
              id={employee.id}
             v_no={employee.v_no}
              vname={employee.vname}
              kmwith_dr={employee.kmwith_dr}
              with_dr_rent={employee.with_dr_rent}
              withdr_total ={withdr_total}
              kmwithout_dr={employee.kmwithout_dr}
              withoutdr_rent={employee.withoutdr_rent}
              withoutdr_total ={withoutdr_total}
              v_total={v_total}
             
              

            />
          );
        })}
        <div>
    

          
        </div>
      </div>

      <button className="btn"
        onClick={() => {
            navigate("/Report");
        }}
        >GO BACK</button>
    </>
  );
};

export default Transport;
