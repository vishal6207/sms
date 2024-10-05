import React from "react";
import { useNavigate } from "react-router-dom";
import brand from "../Assest/1t.jpg";
import sch from "../Assest/sms0.jpg";
import "./HomePage.css";
import Navbar from "../../Navbar/Navbar";

const HomePage = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  return (
    <>

      <div className="homepage-container">
        <div className="header-section">
          <img src={brand} alt="School Logo" className="school-logo" />
          <div className="school-info">
            <h1>BUS PANEL IN SCHOOL MANAGEMENT SYSTEM</h1>
            <h2>ACS STEP UP HIGH SCHOOL</h2>
            <p>
              {" "}
              # B06, H-169, Sector 63, Noida , 201301, U.P. INDIA; 0120 4465842
              · +91 9315676328
            </p>
          </div>
        </div>

        <div className="main-section">
          <img src={sch} alt="School Building" className="school-building" />
          <div className="login-box">
            <h3>LOGIN</h3>
            <input type="text" placeholder="USERNAME" className="input-field" />
            <input
              type="password"
              placeholder="PASSWORD"
              className="input-field"
            />
            <div className="login-buttons">
              <button className="login-button">USER LOGIN</button>
              <button className="login-button">ADMIN LOGIN</button>
            </div>
            <p className="forgot-password">FORGOT PASSWORD ?</p>
            <div className="register-section">
              <p>NOT REGISTERED ?</p>
              <button
                className="register-button"
                onClick={() => navigate("/register")} // Navigate to /register on click
              >
                REGISTER
              </button>
            </div>

            <div className="INDF">
              <p>
                <b>Important message :</b> User and Admin will access the common
                screen to login to the software. Registered users can enter
                their username and password. If they enter incorrect details
                then authentication message will be generated. Further they can
                recover their password or username by selecting Forgot Password.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
