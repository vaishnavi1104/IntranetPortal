import React, { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";
import { BsFillEnvelopeFill } from "react-icons/bs";


function A()
{
  const [userData, setUserdata]= useState([]);
  const [filterdata, setFilterdata]= useState([]);
  const [query, setQuery] = useState('');
   
  useEffect( ()=>{
    const getUserdata= async()=>{
      const reqData= await fetch("https://api.github.com/users");
      const resData= await reqData.json();
      //console.log(resData);
      setUserdata(resData);
      setFilterdata(resData);

    }
getUserdata();
  },[]);

  const handlesearch=(event)=>{
    const getSearch= event.target.value; 
    if(getSearch.length > 0)
    {     
     const searchdata= userData.filter( (item)=> item.login.toLowerCase().includes(getSearch));
     setUserdata(searchdata);
    } else {
      setUserdata(filterdata);
    }
    setQuery(getSearch);
  }


  return(

        <React.Fragment>              
         <Container>
          <div className="container-fluid mt-5"  style={{width:"80%"}}>
    {/*  */}
            <div className='row text-left' >
        <div > 
            <div className='heading'>
              <h3 className='ss'>Employee Directory
              </h3>                
                <div className=''> 
                <div className='search'>
    
                <input className="col-md-3 " type="text" name='name' style={{border:"0.1px solid #030a5eb7" ,fontSize:"20px", fontWeight:"600" ,color:"#030a5eb7"}} value={query}   onChange={(e)=>handlesearch(e)} placeholder='Search...' />
               </div>          
                  </div>                
            </div>

          </div>
                        
                {
                  userData.map( (getUser, index)=>(
                    <div className="col-10 col-md-4 mt-4"  key={getUser.id}>
                    <div className=''>
                        {/* card p-2 */}
                    <div className="card" style={{borderRadius:"10px" }}>
                        <div className='d-flex align-items-center'>
                        <div className='image'><img src={getUser.avatar_url  } alt=""   width="100"  style={{padding:"15px", marginLeft:"20px", borderRadius:"20%" }}/> </div>
                        <div className='ml-3 w-90' style={{marginLeft:"15px", fontSize:"15px"}}>
                            <h4 className=" textLeft" style={{color:"#0018A8",fontSize:"18px" , textTransform:"capitalize" }}>{getUser.login}</h4>
                            <div className='textLeft' style={{fontSize:"10px", color:"#030589b7"}}>< BsFillEnvelopeFill/>{getUser.url}</div> 
                          <i BsFillEnvelopeFill/>
                            {/* <BsFillEnvelopeFill>{getUser.login}</> */}
                            <div className='content' style={{fontSize:"15px"}}>                                        
                                    <h5 className=''>Designation: {getUser.type}</h5>   
                                    <h5 className=''>Department:  {getUser.type}</h5>   
                                    <h5 className=''>Branch: {getUser.type}</h5>   
                            </div>
                        </div>
                    </div>

                       <button className="viewMore"  >View More</button>
                    </div>
                    
                </div>
                </div>
                   )) }

                   </div>  
                   </div>
      </Container>

        </React.Fragment>
    );
}
export default A;