//import React from 'react'
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
// import './styles.css';
import { Card, Col, Container, Row } from "react-bootstrap";

// import { Container } from "react-bootstrap";
import { BsFillEnvelopeFill } from "react-icons/bs";
import "../Pages/FetchAPI.css";
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
    <React.Fragment>
      <Navbar />
      <Sidebar />
      <Container>
        <div className="container-fluid mt-0" style={{ width: "80%" }}>
          {/*  */}
          <div className="row text-left">
            <div>
              <div className="heading">
                <h3
                  className="ss"
                  style={{ fontSize: "24px", fontWeight: "700" }}
                >
                  Employee Directory
                </h3>

                <div className="">
                  <div className="search">
                    <input
                      className="col-md-3 "
                      type="text"
                      name="name"
                      style={{
                        border: "0.1px solid #030a5eb7",
                        fontSize: "20px",
                        fontWeight: "600",
                        color: "#030a5eb7",
                      }}
                      value={query}
                      onChange={(e) => handlesearch(e)}
                      placeholder="Search..."
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* <div class="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
                <div class="btn-group me-2" role="group" aria-label="First group">
                  <button type="button" class="btn btn-primary">A</button>
                  <button type="button" class="btn btn-primary">B</button>
                  <button type="button" class="btn btn-primary">C</button>
                  <button type="button" class="btn btn-primary">D</button>
                  <button type="button" class="btn btn-primary">E</button>
                  <button type="button" class="btn btn-primary">F</button>
                  <button type="button" class="btn btn-primary">G</button>
                  <button type="button" class="btn btn-primary">H</button>
                  <button type="button" class="btn btn-primary">I</button>
                  <button type="button" class="btn btn-primary">J</button>
                  <button type="button" class="btn btn-primary">K</button>
                  <button type="button" class="btn btn-primary">L</button>
                  <button type="button" class="btn btn-primary">M</button>
                  <button type="button" class="btn btn-primary">N</button>
                  <button type="button" class="btn btn-primary">O</button>
                  <button type="button" class="btn btn-primary">P</button>
                  <button type="button" class="btn btn-primary">Q</button>
                  <button type="button" class="btn btn-primary">R</button>
                  <button type="button" class="btn btn-primary">S</button>
                  <button type="button" class="btn btn-primary">T</button>
                  <button type="button" class="btn btn-primary">U</button>
                  <button type="button" class="btn btn-primary">V</button>
                  <button type="button" class="btn btn-primary">W</button>
                  <button type="button" class="btn btn-primary">X</button>
                  <button type="button" class="btn btn-primary">Y</button>
                  <button type="button" class="btn btn-primary">Z</button>
                  
                </div>
            </div> */}


            {userData.map((getUser, index) => (
              <div className="col-6 col-md-4 " key={getUser.id}>
               
                  {/* card p-2 */}
                  <div className="cards">
                  <div className="card p-0 overflow-hidden shadow">
                    <div className="box d-flex align-items-center">
                      <div className="image">
                        <img
                          src={getUser.avatar_url}
                          alt=""
                          width="80"
                          style={{
                            padding: "5px",
                            // marginLeft: "10px",
                            borderRadius: "20%",
                          }}
                        />{" "}
                      </div>
                      <div >
                        <h4
                          className=" textLeft"
                          style={{
                            color: "#0018A8",
                            fontSize: "18px",
                            textTransform: "capitalize",
                          }}
                        >
                          {getUser.login}
                        </h4>
                        <div
                              className=""
                              style={{ fontSize: "12px", color: "#030589b7",textAlign:"center" }}
                            >
                              <BsFillEnvelopeFill style={{float:"left"}}/>
                              {getUser.url}
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
                                <div
                                  className="contents">
                                  <h5 className="">Designation: {getUser.type}</h5>
                                  <h5 className="">Department: {getUser.type}</h5>
                                  <h5 className="">Branch: {getUser.type}</h5>
                                </div>
                             </div>
                      {/* <i BsFillEnvelopeFill/> */}
                      {/* <BsFillEnvelopeFill>{getUser.login}</> */}
                    </div>
                    

                    <button
                      className="viewMore"
                      onClick={() =>
                        getData(
                          getUser.avatar_url,
                          getUser.login,
                          getUser.url,
                          getUser.type
                          )
                        }
                        >
                      View More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
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
      {/* <PeopleModal /> */}
    </React.Fragment>
  );
}

export default People;
