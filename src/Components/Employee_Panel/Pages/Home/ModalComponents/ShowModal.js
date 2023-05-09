import { useEffect } from "react";
import "./modal.css";

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
      <h2>Stay tuned</h2>
      <p>lorem ccmcjd  wwuwejj vVAUSD HEGDJWD WW SFDW,dgdtywed ddgvrdD WD WTYFDWD B JVDTYDwd</p>
      <button className="Modal-btn" onClick={closeModal}>Accept It</button>   
      </div>
      </>
    )
  }

  export default MyModal;