import React,{useState} from 'react'
// import { NavLink } from 'react-router-dom'
import "./MissionStyle.css";
import { TbTargetArrow } from "react-icons/tb";
import MyModal from './ModalComponents/ShowModalMission';

const Mission = () => {
    const [showModal, setShowModal] = useState(false);
    const closeModal =() => setShowModal(false);
    return (
        <div className='Mission' >
                <div className='logo'>
                    <TbTargetArrow  style={{textAlign:"center", background:"blue", color:"#fff", width:"80px", height:"57px" }}/>
                </div>
            <button className='btn'  onClick={()=> setShowModal(true)} style={{textDecoration:"none",width:"100%"}}>
                <div className='Missions'>
                <h3 className='h3-Mission' style={{textDecoration:"none"}}>
                        Our Mission</h3>
                </div>
             </button>
             {showModal && <MyModal closeModal ={closeModal}/>} 

        </div>
      )
}

export default Mission