import { useEffect } from "react";
import "./modal.css";
import vision from "./vision.jpg"

const MyModal =({closeModal}) =>{
    useEffect (()=>
    {
        document.body.style.overflowY = 'hidden';
        return () =>{
            document.body.style.overflowY = 'scroll';
        };
    },[]);

    return(
      <>
      <div className="modal-wrapper" onClick={closeModal}></div>
      <div className="modal-container">
      <h2>Our Vision</h2>
      <div className="mission-flex">
      <img src={vision} height="250px" width="400px" alt=""/>
      <p>Our vision to make life easier for staff. It will help you easily find information that you need for your work. It will also be the resource to collaborate with your team and share resources throughout the organization.</p>
      <p>We build the best products, cause no unnecessary harm, use programming to inspire and implement solutions.</p>
      </div>
      <button className="Modal-btn" onClick={closeModal}>Close</button>   
      </div>
      </>
    )
  }

  export default MyModal;