import React from "react";
import "./HeroSection.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import HeroImage from "../../assets/h.jpg";

const HeroSection = () => {  
  return (
    <>
      <div className="container-fluid hero-container ">
        <div className="row align-items-center">
          
          <div className="col-md-6">
            {/* <img
              src={HeroImage}
              alt="Hero"
              className="img-fluid hero-image"
            /> */}
          </div>

          
          <div className="col-md-6 hero-text">
            <h1 className="he">Welcome to
            <span className="he3">School Management Syestem</span>
            </h1>

            
            <p>
             Streamline School Management, Class Organization, and add
             students faculity. Seamlesly Track Attendence Performance
             and Provide Feedback. Access Records, View Marks, and Comunicate effortlessly
            </p>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
