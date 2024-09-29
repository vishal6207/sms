import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import './MyAccount.css';

const MyAccount = () => {
  const [isEditingContact, setIsEditingContact] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook
  
  const handleEditContact = () => {
    setIsEditingContact(!isEditingContact);
  };

  const handleEditAddress = () => {
    setIsEditingAddress(!isEditingAddress);
  };

  const handleBack = () => {
    navigate('/'); // Navigate to home page
  };

  return (
    <div className="my-account">
      <h1>MY ACCOUNT</h1>
      <p className="header-note">DEAR USERS! KINDLY CHECK YOUR DETAILS CAREFULLY!</p>
      
      <div className="student-info">
        <h2> <b>STUDENT/ADMIN  INFORMATION</b></h2>
        <div className="info-row">
          <label>FIRST NAME :</label>
          <input type="text" value="Vishal" readOnly />
        </div>
        <div className="info-row">
          <label>LAST NAME :</label>
          <input type="text" value="Pandey" readOnly />
        </div>
        <div className="info-row">
          <label>CLASS :</label>
          <input type="text" value="XII" readOnly />
        </div>
        <div className="info-row">
          <label>Section :</label>
          <input type="text" value="D" readOnly />
        </div>
        <div className="info-row">
          <label>ROLL NO.</label>
          <input type="text" value="35" readOnly />
        </div>
        <div className="info-row">
          <label>GENDER :</label>
          <input type="text" value="Male" readOnly />
        </div>
        <div className="info-row">
          <label>BIRTHDAY : </label>
          <input type="text" value="Thursday, June 28, 2001" readOnly />
        </div>
      </div>

      <div className="contact-info">
        <div className="info-row">
          <label>CONTACT NO.</label>
          <input 
            type="text" 
            value="" 
            readOnly={!isEditingContact} 
            onChange={(e) => {}}
          />
          <button onClick={handleEditContact}>EDIT</button>
        </div>
        <div className="info-row">
          <label>ADDRESS :</label>
          <textarea 
            value=" " 
            readOnly={!isEditingAddress} 
            onChange={(e) => {}}
            rows="4" // Adjust the number of rows to increase height
            className="address-textarea" // Add a class for additional styling if needed
          />
          <button onClick={handleEditAddress}>EDIT</button>
        </div>
      </div>

      <div className="actionss">
        <button onClick={handleBack}>BACK</button>
        <button>SAVE</button>
        <button>EXIT</button>
      </div>
    </div>
  );
};

export default MyAccount;
