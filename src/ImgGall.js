import React from 'react'
import './ImgGall.css';
import Data from './Data.json';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import images from './images.png';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "#091351",background: "#091351",color:"white",paddingTop:"10px",paddingBottom:"10px",height:"40px",borderTopRightRadius: "20px", borderBottomRightRadius: "20px" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, background: "#091351",color:"white",paddingTop:"10px",paddingBottom:"10px",height:"40px",borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px" }}
        onClick={onClick}
      />
    );
  }


export default function ImgGall() {
    console.log(Data)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div>

<div class="container">
    <div class="box" id="box1">
        <img src={images} height="350px" width="500px" alt=""/>
        {/* <img src={pot} alt="My logo" height={350} width={500}  /> */}
        </div>
    <div class="box" id="box2" style={{}}>
    <div className='    '>
            <div className='row'>
                <Slider {...settings}>
                {Data.map((value) => (
                    <div className='col-md-16' key={value.no} >
                        <div className='card'>
                            {/* <img src={value.img}  className='card-img-top' alt={value.name}/> */}
                    <img src={images} height="" width="" alt=""/>

                            {/* <div className='d-flex'>
                                <p>{value.name}</p>
                                <p>{value.off}</p>
                                
                            </div> */}
                        </div>
                    </div>
                ))}
                </Slider>
            </div>
        </div>
    </div>
    <div class="box" id="box3" >   </div>
    


 </div>
    </div>
  )
}
