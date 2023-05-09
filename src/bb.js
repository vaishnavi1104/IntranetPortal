import { useState } from "react";
import './App.css'
import { FaBeer } from 'react-icons/fa';
import { BsFillEnvelopeFill } from "react-icons/bs";
function BB(){


    // const newLocal = "butt";
    return(
        <>
        <div className="login-Box">
            <h1 >Employee Directory
                
            </h1>
            
            <div className="textbox" ><input type="text" placeholder="Usename" name="" value=""/></div>
            <div className="textbox" ><input type="text" placeholder="password" name="" value=""/></div>
            <input className="btn" type="button" name="" value="sign in"/>
            
            
        </div>
        <div style={{fontSize:"40px"}}>
            
                <BsFillEnvelopeFill/>
        </div>

        <div>
        </div>
        </>
    )
}
export default BB;