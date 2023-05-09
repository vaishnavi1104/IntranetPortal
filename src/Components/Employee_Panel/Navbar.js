import React, { useState } from 'react'
//import { NavLink } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import "./NavbarStyle.css";

import Grid from "@mui/material/Grid";
import NotificationsIcon from '@mui/icons-material/Notifications';
// import WindowIcon from '@mui/icons-material/Window';
import WidgetsIcon from '@mui/icons-material/Widgets';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import Home from './Pages/Home/Home';
import News from './Pages/News';
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import SearchBar from './SearchBar';

function Navbar() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
  <>
    <nav className="navbar">
    
    <Grid container className="grid">
    <SearchBar />
           <Grid item className="grid-item"><NotificationsIcon /></Grid>
           <Grid item className="grid-item"><WidgetsIcon /></Grid>
           <Grid item className="grid-item"><MdOutlineMiscellaneousServices  style={{rotate:"270deg", fontSize:"25px" }}/></Grid>
           <Grid item className="grid-item"><LogoutIcon /></Grid>
    </Grid>
    
       <div className="nav-container">
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                     <li className="nav-item">
                        <NavLink to="/" style={{textDecoration:" none"}} activeClassName="active" className="nav-links" onClick={handleClick}>
                         HOME
                        </NavLink>
                     </li>

                     <li className="nav-item">
                        <NavLink to="/News" style={{textDecoration:" none"}}  activeClassName="active"  className="nav-links" onClick={handleClick}>
                         News
                        </NavLink>
                     </li>

                     <li className="nav-item">
                        <NavLink to="/Social" style={{textDecoration:" none"}}  activeClassName="active"  className="nav-links" onClick={handleClick}>
                         SOCIAL
                        </NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink to="/People" style={{textDecoration:" none"}}  activeClassName="active"  className="nav-links" onClick={handleClick}>
                         POEPLE
                        </NavLink>
                     </li>

                     <li className="nav-item">
                        <NavLink to="/Stories" style={{textDecoration:" none"}}  activeClassName="active"  className="nav-links" onClick={handleClick}>
                         STORIES
                        </NavLink>
                     </li>

                     <li className="nav-item">
                        <NavLink to="/Documents" style={{textDecoration:" none"}}  activeClassName="active"  className="nav-links" onClick={handleClick}>
                         DOCUMENT
                        </NavLink>
                     </li>
                     
                </ul>

                <NavLink to="/profile" className="nav-icon2" onClick={handleClick}>
                              <i className="fas fa-user-circle fa-2x"></i>
               </NavLink>

                <div className="nav-icon1" onClick={handleClick}>
                <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
      </div>

     
           
    </nav>
  </>
  )
}

export default Navbar
