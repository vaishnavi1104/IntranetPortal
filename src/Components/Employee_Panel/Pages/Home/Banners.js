import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";
import "./BannerStyle.css";

function Banners() {

    const [imageNum, setImageNum] = useState(1);
    const sliderImages = [
       {
          url: "https://media.istockphoto.com/id/1206225766/photo/a-woman-using-and-typing-on-laptop-computer-with-blank-white-desktop-screen.jpg?s=612x612&w=0&k=20&c=1tPC8UKXowPEzRkM8bcLrFTl8jmC_33QOFq9_bMsRDg=",
       },
       {
          url: "https://i.pinimg.com/736x/8d/c7/a8/8dc7a83fccb23e3b4a5ebac802107d97.jpg",
       },
       {
          url: "https://st3.depositphotos.com/4297569/12635/i/600/depositphotos_126357128-stock-photo-mature-businesswoman-looking-at-the.jpg",
       },
       {
          url: "https://i0.wp.com/sciqus.com/wp-content/uploads/2021/08/group-people-working-out-business-plan-office.jpg?fit=1024%2C683&ssl=1",
       },
       {
          url: "https://media.licdn.com/dms/image/C5612AQHkC4ncPqdmNA/article-cover_image-shrink_720_1280/0/1571738720806?e=2147483647&v=beta&t=42wGkZdhcAn9a3R7AMROHqCYvgjstRwjJr9EZ-ev2dU",
       },
    ];


  return (
    <div>
         <div className="banner1">
         <SimpleImageSlider
            width={750}
            height={400}
            images={sliderImages}
            showBullets={true}
            showNavs={false}
            autoPlay={true} 
            onStartSlide = {(index, length) => {
               setImageNum(index);
            }}
               autoPlayDelay = {2}
         />
         </div>
    </div>
  )
}

export default Banners