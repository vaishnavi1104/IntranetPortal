//import React from 'react'
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import "../Pages/Docs.css";

import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
// import './styles.css';
import { Card, Col, Container, Row } from "react-bootstrap";

// import { Container } from "react-bootstrap";
import { BsFillEnvelopeFill } from "react-icons/bs";
// import "../Pages/FetchAPI.css";
import PeopleModal from "./PeopleModal";

function People() {
  const [userData, setUserdata] = useState([]);
  const [filterdata, setFilterdata] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getUserdata = async () => {
      const reqData = await fetch("https://api.github.com/users");
      const resData = await reqData.json();
      //console.log(resData);
      setUserdata(resData);
      setFilterdata(resData);
    };
    getUserdata();
  }, []);

  // useEffect( ()=>{
  //     axios.get("https://api.github.com/users")
  //     .then(Response=>{
  //       setUserdata(Response.data);
  //         })
  //         .catch(error =>{
  //           console.log(error);
  //         });
  //       }, []);

  // useEffect (()=>{
  //   axios.get('https://localhost:7274/api/Employee')
  //   .then(Response=>{
  //     setEmployee(Response.data);
  //   })
  //   .catch(error =>{
  //     console.log(error);
  //   });
  // }, []);
// code for filtering data
  const handlesearch = (event) => {
    const getSearch = event.target.value;
    if (getSearch.length > 0) {
      const searchdata = userData.filter((item) =>
        item.login.toLowerCase().includes(getSearch)
      );
      setUserdata(searchdata);
    } else {
      setUserdata(filterdata);
    }
    setQuery(getSearch);
  };

  // code for model it means popup
  const [model, setModel] = useState(false);
  const [tempdata, setTempdata] = useState([]);

  const getData = (avatar_url, login, url, type) => {
    let tempData = [avatar_url, login, url, type];
    setTempdata((item) => [1, ...tempData]);

    return setModel(true);
  };

  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

  return (

    <>
    <Navbar />
      <Sidebar />
        <h1 className="text-center">Popular Dishes</h1>
       <div className="container d-flex justify-content-center pl-5">
        
        <div className="row row-cols-1 row-cols-md-3 g-2 py-5 " style={{width:"85%"}}>
        {userData.map((getUser, index) => (
            <div className="col"   key={getUser.id}>
            <div className="card">
              <div className="d-flex">
                        <img src={getUser.avatar_url} width="80" alt="..."/>
                      </div>
                        <div className="slider">
                          <div className="card-body">
                              <h6 className="card-title"> {getUser.login}</h6>
                              <h6 className="card-text" style={{fontSize:"10px"}}><BsFillEnvelopeFill style={{float:"left", paddingRight:"2px"}}/>{getUser.url}</h6>
                          </div>
                          
                      <div className="image ">
                          <div className="contents">
                                      <h5 className="">Designation: {getUser.type}</h5>
                                      <h5 className="">Department: {getUser.type}</h5>
                                      <h5 className="">Branch: {getUser.type}</h5>
                          </div>
                      </div>
                      
              </div>
                      <div className=" justify-content-around">
                          <button className="btn btn-primary">View More</button>
                      </div>
            </div>
        </div>
        ))}
          
          </div>
          </div>    
    </>
  );
}

export default People;
