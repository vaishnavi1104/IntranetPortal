import React,{useEffect, useState} from "react";
import "./FetchAPI.css";


export default function Searchfilter2(){
    const [data, setData] = useState([]);
    const [searchApiData, setSearchApiData] = useState([]);
    const [filterVal, setFilterVal] = useState('');
    useEffect(() =>
    {
        const fetchData=()=>{
            fetch('https://api.github.com/users')
            .then(response => response.json())
            .then(json =>{
                setData(json)
                setSearchApiData(json)
            })
        }
        fetchData();
    },[])
    
    const handleFilter=(e)=>{
        if(e.target.value == ''){
            setData(setSearchApiData)
        }else{
           const filterResult = searchApiData.filter(users => users.login.toString().toLowerCase().includes(e.target.value.toString().toLowerCase()))
           if(filterResult.length >0){
            setData(filterResult)
           }else{
                setData([{"login":"No Data"}])
           }

        //    setData(filterResult)
        }
        setFilterVal(e.target.value)
    }

    return(
        <div  style={{background:"#ebe7e7"}} >
            <div>
                <input className="" placeholder="Search" style={{ }}  value={filterVal} onInput={(e)=> handleFilter(e)}/>
            </div>
           
                {/* <th>Name</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Phone</th> */}
                <div className="container-fluid mt-5"  style={{width:"70%"}}>
    {/*  */}
                <div className='row text-left' >         
                {
                    data.map(users =>{
                        return(
                            <div className="col-10 col-md-4 mt-4"  key={users.id}>
                                <div className=''>
                                    {/* card p-2 */}
                                <div className="card" style={{borderRadius:"10px" }}>
                                    <div className='d-flex align-items-center'>
                                    <div className='image'><img src={users.avatar_url  } alt=""   width="100"  style={{padding:"15px", marginLeft:"20px", borderRadius:"20%" }}/> </div>
                                    <div className='ml-3 w-90' style={{marginLeft:"15px", fontSize:"15px"}}>
                                        <h4 className=" textLeft" style={{color:"#0018A8",fontSize:"18px" , textTransform:"capitalize" }}>{users.login}</h4>
                                        <div className='textLeft' style={{fontSize:"14px", color:"#030589b7"}}>{users.url}</div> 
                                        <div className='content' style={{fontSize:"15px"}}>                                        
                                                <h5 className=''>Designation: {users.type}</h5>   
                                                <h5 className=''>Department:  {users.type}</h5>   
                                                <h5 className=''>Branch: {users.type}</h5>   
                                        </div>
                                    </div>
                                </div>

                                   <button className="viewMore"  >View More</button>
                                </div>
                                
                            </div>
                            </div>
                        )
                    })
                }
        </div>
        </div>
            
        </div>
    )
}
// export default Searchfilter2;