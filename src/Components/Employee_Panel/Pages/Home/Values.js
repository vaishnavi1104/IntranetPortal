import React,{useState} from 'react'
// import { NavLink } from 'react-router-dom'
import "./ValuesStyle.css";
import { RiHandHeartFill } from "react-icons/ri";
import MyModal from './ModalComponents/ShowModalValues';

const Values = () => {
    const [showModal, setShowModal] = useState(false);
    const closeModal =() => setShowModal(false);
 
    return (
        <div className='values' >
                <div className='logo'>
                    <RiHandHeartFill  style={{textAlign:"center", background:"orange", color:"#fff", width:"80px", height:"57px" }}/>
                </div>
            <button className='btn' onClick={()=> setShowModal(true)} style={{textDecoration:"none"}}>
                <div className=''>
                <h3 className='h3-values' style={{textDecoration:"none"}}>
                        Core Values</h3>
                </div>
             </button>
            {showModal && <MyModal closeModal ={closeModal}/>} 

        </div>
      )
}

export default Values