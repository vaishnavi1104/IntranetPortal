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
      {/* <div className="container"/> */}
      {/* <div className="row row-cols-1 row-cols-md-3 g-2 py-5" style={{width:"85%"}}> */}
                  
      <div className="container mt-0 mb-0 d-flex justify-content-center pl-5">
             <div className="row row-cols-md-3 " style={{width:"85%"}}>                        
                         <div className="heading"><h2 className="">Employee Directory</h2></div>
                         <div className="col-md-4">
                         <div className="search">
                           <i className="fa fa-search"/>
                           <input type="text " className="form-control" placeholder="Search Employee"
                           value={query}
                           onChange={(e) => handlesearch(e)}
                           />
                         </div>
                         </div>
              </div>
            </div>
     

      
       <div className="container mt-0 d-flex justify-content-center pl-5">
             

        <div className="row row-cols-1 row-cols-md-3 g-2 py-5" style={{width:"85%"}}>
              

        {userData.map((getUser, index) => (
            <div className="col mt-0"   key={getUser.id}>
                <div className="card">
                         
                            <div className="d-flex">
                              <img src={getUser.avatar_url} className="rounded" width="80" alt="..."/>
                                <div className="cardbody ml-4">
                                    <h6 className="cardtitle"> {getUser.login}</h6>
                                    <h6 className="cardtext" style={{fontSize:"10px"}}><BsFillEnvelopeFill style={{float:"left", paddingRight:"2px", fontSize:"14px"}}/>{getUser.url}</h6>
                                </div>
                            </div>
                        
                            
                    
                                
                                <div className="slider"
                                 onClick={() =>
                                  getData(
                                    getUser.avatar_url,
                                    getUser.login,
                                    getUser.url,
                                    getUser.type
                                  )
                                }>
                                  <div className="contents">
                                              <h5 className="">Designation: {getUser.type}</h5>
                                              <h5 className="">Department: {getUser.type}</h5>
                                              <h5 className="">Branch: {getUser.type}</h5>
                                  </div>
                                </div>
                                <div className="justify-content-center">
                                    <button className="btnn" onClick={() =>
                                      getData(
                                        getUser.avatar_url,
                                        getUser.login,
                                        getUser.url,
                                        getUser.type
                                        )
                                      }>View More</button>
                                </div>
                </div>
            </div>
        ))}
          
          </div>
          </div>  
          {model === true ? (
        <PeopleModal
          avatar_url={tempdata[1]}
          login={tempdata[2]}
          url={tempdata[3]}
          type={tempdata[4]}
          hide={() => setModel(false)}
        />
      ) : (
        ""
      )}  
    </>
  );
}

export default People;
