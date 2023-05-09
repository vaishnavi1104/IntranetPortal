//import React from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Image, Modal  } from 'react-bootstrap';
import './Social.css';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function ImgGall() {
  
  
    
return (
  <div>
      <Navbar />
      <Sidebar />
      <div className='container'>
      <div>
      <div className="PhotoGallery">
      <h1  id='mainheads' className='Launch' >Photo Gallery</h1>
      </div>
      <br/>
      <h2 id='mainheads' className='mt-5'>Launching Event</h2>
        <div className="containers">
          {/* box1 code mothi image */}
          <div class="box" id="box1">
            
          </div>
      {/* box 2 */}
            <div class="box" id="box2" style={{}}>

            </div>
            {/* box 3 */}
            {/* vertical category box */}
            <div class="box overflow-auto" id="box3" >  
           
             </div>
  
            </div>
             </div>
        </div>
  </div>
)
}
