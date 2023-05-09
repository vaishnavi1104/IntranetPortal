import { useEffect } from "react";
import "./modal.css";
import coreValues from "./values.png"

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
      <div className="modal-container" style={{ backgroundColor: "#f1f6f4"}}>
      <h2>Core Values</h2>
      <div className="mission-flex">
      <img src={coreValues} height="250px" width="400px" alt=""/>
      <p>Our intranet is all about findability, utility and ease of use. It is the place for our essential stuff.</p>
      
      {/* <ul className="list">
        <li>Build a Positive Team and Family Spirit.</li>
        <li>Do More With Less. </li>
        <li>Be Passionate and Determined.</li>
        <ul>Be Humble.</ul>
        </ul> */}
      </div>
      <button className="Modal-btn" onClick={closeModal}>Close</button>   
      </div>
      </>
    )
  }

  export default MyModal;