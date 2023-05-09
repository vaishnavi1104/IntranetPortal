import React,{useState} from 'react'
// import { NavLink } from 'react-router-dom'
import "./VisionStyle.css";
import { GiEyeShield } from "react-icons/gi";
import MyModal from './ModalComponents/ShowModalVision';


// height:"80px", marginTop:"",borderRadius:"4px", marginLeft:"40px",marginRight:"0px",marginBottom:"",padding:"", fontSize:"",transform: "rotate(270deg)",background:"rgb(230, 26, 145)", color:"#fff"
const Vision = () => {
    const [showModal, setShowModal] = useState(false);
    const closeModal =() => setShowModal(false);

    return (
        <div className='vision' >
                <div className='logo'>
                    <GiEyeShield  style={{textAlign:"center", background:"rgb(230, 26, 145)", color:"#fff", width:"80px", height:"58px" }}/>
                </div>
            <button className='btn' onClick={()=> setShowModal(true)} style={{textDecoration:"none"}}>
                <div className='visions'>
                <h3 className='h3-vision' style={{textDecoration:"none"}}>
                        Our Vision</h3>
                </div>
             </button>
             {showModal && <MyModal closeModal ={closeModal}/>} 
        </div>
      )
}

export default Vision