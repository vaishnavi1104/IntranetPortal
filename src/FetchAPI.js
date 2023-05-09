import React, { useState, useEffect } from 'react';
import { Container } from "react-bootstrap";

function FetchAPI()
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
        <div className='row mt-3'> 
            <div className='col-md-12 mt-3 mb-3'>
              <h3 className='mb-3'>Search record Datatable in React Js</h3>                
                <div className="col-md-6">                
                <input  type="text" name='name' value={query}   className="form-control" onChange={(e)=>handlesearch(e)} placeholder='Search...' />
              </div>          
            </div>
        </div>

        
            
            <div className="container-fluid mt-5"  style={{width:"80%"}}>
    {/*  */}
                <div className='row text-left' >
            
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
                            <div className='textLeft' style={{fontSize:"14px", color:"#030589b7"}}>{getUser.url}</div> 
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
export default FetchAPI;