//import {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import "./EmpDirectoryStyle.css";
import axios from 'axios';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function EmpDirectory() {
  const[emp, setEmp] = useState([]);

  useEffect(() =>{
    axios.get('https://localhost:7274/api/Employee')
    .then(Response =>{
      setEmp(Response.data);
    }).catch(error =>{
      console.log(error);
    });
  
   },[] );
  return (
    <div>
    <p className="text-emp-directory">Employee Directory</p>
         <div className="EmpDirectory">
         <div >
  <Slider dots={true}>
    {emp.map(employee => (
      <div key={employee.employeeId}>
      <img height='50%' width='50%' src={employee.imageSrc} alt={employee.employeeName} />
        <h3>{employee.employeeName}</h3>
        <p>{employee.designation}</p>
        
      </div>
    ))}
  </Slider>
</div>        
         </div>

    </div>
  )
}

export default EmpDirectory