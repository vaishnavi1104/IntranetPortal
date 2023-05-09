import React, { useState,useEffect }  from 'react'
import "./NewStartersStyle.css";
import emp1 from "../../Images/emp1.jpg";
import { Carousel } from 'react-responsive-carousel'; 
import axios from 'axios'; 
import 'bootstrap';
import 'react-bootstrap'

import "react-responsive-carousel/lib/styles/carousel.min.css"; 

function NewStarters() {
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
         <p className="text-new-starters">New Starters</p>
         <div className="NewStarters">
         <Carousel className="carousel" showThumbs={false} showIndicators={false} showStatus={false} stopOnHover={false}>
  {emp.map(item => (
    <div key={item.employeeId} >
      <img className=" d-block w-100" src={item.imageSrc} alt={item.employeeName} />
      <div className="carousel-caption">
        <h2 className="h1-newstarter">{`Welcome ${item.employeeName}`}</h2>
        <p className="p-newstarter">{`${item.employeeName} joined  as a ${item.designation}`}</p>
      </div>
    </div>
  ))}
</Carousel>
         </div>
         
    </div>
  )
}

export default NewStarters