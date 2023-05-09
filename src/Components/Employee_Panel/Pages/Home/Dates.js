// import React from "react";
// import "./DateStyle.css";
// import moment from 'moment';
// import Grid from "@mui/material/Grid";
// // import TodayRoundedIcon from '@mui/icons-material/TodayRounded';
// import { WiDaySunnyOvercast } from "react-icons/wi";
// import ReactDOM from 'react-dom'

// // const date =new Date('in');
// // const hour = date.getHours();

// // let curDate = new Date();
// // curDate = curDate.getHours();
// // let greeting ="";

// // if (curDate >= 1 && curDate < 12){
// //   greeting ="Good Morning";
// // }else if(curDate >12 && curDate < 19){
// //   greeting ="Good AfterNoon";
// // }else{
// //   greeting = "Good Night";
// // }

// function Date(){
//   <div>
      
//   <div className="Date">
//         <div className=".grid-item2">
//         <table>
//           <tr>
//             <th className="" width="20%" ><WiDaySunnyOvercast size="85px"/></th>
//             <th className="">
//               {/* <h3>{greeting}</h3> */}
//   {/* { hour >=12 ?  hour >=16 ? <h2>Good Evening</h2> : <h2>Good Afternoon</h2> : <h2>Good Morning</h2> } */}
//                 <h3 className="h3">

//                 <br/>{moment().format('dddd')} <br/> {moment().format('MM-D-YYYY')} </h3>
//                 <p className="p2"></p>
//             </th>
//           </tr>
//         </table>
//   </div>
// </div>
// </div>
// } 

// export default Date;




import React from "react";
import "./DateStyle.css";
import moment from 'moment';
import Grid from "@mui/material/Grid";
// import TodayRoundedIcon from '@mui/icons-material/TodayRounded';
import { WiDaySunnyOvercast } from "react-icons/wi";

function Dates() {
let curDate = new Date();
curDate = curDate.getHours();
let greeting ="";
if (curDate < 12) {
     greeting ="Good Morning";

   } else if (curDate < 18) {
     greeting ="Good Afternoon";

   } else {
     greeting='good evening';
   }
return (
       
    <div>
         <div className="Date">
               <Grid container>
               <Grid item className="grid-item2" ><WiDaySunnyOvercast style={{ fontSize: "100px" }}/></Grid>
               <h3 className="h3" style={{fontSize:"15px"}}><span style={{textTransform:"uppercase"}}>{greeting}</span>
               <h3 className="h4" style={{fontSize:"17px"}}>{moment().format('dddd')} <br/>{moment().format('D-MM-YYYY')}</h3>
               </h3>
               {/* <p className="h3">{moment().format('D-MM-YYYY')}</p> */}
               </Grid>
         </div>
    </div>
    
  )
}

export default Dates



