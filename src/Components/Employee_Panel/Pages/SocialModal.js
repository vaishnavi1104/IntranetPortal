import React, { Component } from "react";
import Slider from "react-slick";
import './Social.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Data from './Data.json';
import { NavLink } from "react-router-dom";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display:"none" }}
      onClick={onClick}
    />
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

export default class AsNavFor extends Component {
//   console.log(Data);
  

  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null,
      nav3: null,
      nav4: null,
      nav5: null,
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider3,
      nav2: this.slider2,
      nav3: this.slider1,
      nav4: this.slider4,
      nav5: this.slider5
    });
  }

  render() {
    // code for data.json file
    const settings = {
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
      };

    console.log(Data);
    return (
      <div className="">
        <h3 className="main-head">Photo Albums</h3>
        <div className="d-flex">
        <h4 className="heading">Independance Day</h4>
        <div style={{float:"right", marginLeft:"90px"}}>
          <NavLink to="/ViewAll" style={{textDecoration:"none"}}>
          <h4 className="heading" >view</h4>
          </NavLink>
        </div>
        </div>
        <div className="" id="boxIndependance" style={{}}>
              <div className='    '>
                  <div className='row'>
        <Slider
           {...settings}
          asNavFor={this.state.nav3}
          ref={slider => (this.slider1 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
                      {/* <Slider {...settings}> */}
                          {Data.map((value) => (
                                      <div className='col-md-16' key={value.no} >
                                          <div className='card' id="cardIndepandance">
                                            <img src={value.img}  alt={value.name}/>
                                    

                                          </div>
                                      </div>
                          ))}
                      {/* </Slider> */}
        </Slider>
                  </div>
              </div>
            </div>
        <h4 className="heading">Annual Day Celebration</h4>
        <div className="" id="boxIndependance" style={{}}>
              <div className='    '>
                  <div className='row'>
        <Slider
          {...settings}
          asNavFor={this.state.nav2}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          
        >
                      {/* <Slider {...settings}> */}
                          {Data.map((value) => (
                                      <div className='col-md-16' key={value.no} >
                                          <div className='card' id="cardIndepandance">
                                            <img src={value.img}  alt={value.name}/>
                                    

                                          </div>
                                      </div>
                          ))}
                      {/* </Slider> */}
        </Slider>
                  </div>
              </div>
            </div>
        {/*  */}
        <h4 className="heading">Blood Donation Campain</h4>
        <div className="" id="boxIndependance" style={{}}>
              <div className='    '>
                  <div className='row'>
        <Slider
        {...settings}
          asNavFor={this.state.nav1}
          ref={slider => (this.slider3 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
                      {/* <Slider {...settings}> */}
                          {Data.map((value) => (
                                      <div className='col-md-16' key={value.no} >
                                          <div className='card' id="cardIndepandance">
                                            <img src={value.img}  alt={value.name}/>
                                    

                                          </div>
                                      </div>
                          ))}
                      {/* </Slider> */}
        </Slider>
                  </div>
              </div>
            </div>
        <h4 className="heading">Annual Day Celebration</h4>
         <div className="" id="boxIndependance" style={{}}>
              <div className='    '>
                  <div className='row'>
        <Slider
          {...settings}
          asNavFor={this.state.nav4}
          ref={slider => (this.slider4 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
                      {/* <Slider {...settings}> */}
                          {Data.map((value) => (
                                      <div className='col-md-16' key={value.no} >
                                          <div className='card' id="cardIndepandance">
                                            <img src={value.img}  alt={value.name}/>
                                    

                                          </div>
                                      </div>
                          ))}
                      {/* </Slider> */}
        </Slider>
        
                  </div>
              </div>
            </div>
            <h4 className="heading">Annual Day Celebration</h4>
         <div className="" id="boxIndependance" style={{}}>
              <div className='    '>
                  <div className='row'>
        <Slider
          {...settings}
          asNavFor={this.state.nav5}
          ref={slider => (this.slider5 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
                      {/* <Slider {...settings}> */}
                          {Data.map((value) => (
                                      <div className='col-md-16' key={value.no} >
                                          <div className='card' id="cardIndepandance">
                                            <img src={value.img}  alt={value.name}/>
                                    

                                          </div>
                                      </div>
                          ))}
                      {/* </Slider> */}
        </Slider>
        
                  </div>
              </div>
            </div>
      </div>
    );
  }
}
