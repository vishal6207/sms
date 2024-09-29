import React from 'react';
import './AdminNav.css';  
import Admin from '../../../adminimage.jpg';
import { BiLogOutCircle } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';  

const AdminNav = () => {
  const navigate = useNavigate();  

  const handleLogout = () => {
  
    
    navigate('./LoginForm');  
  };

  return (
    <nav className="navbar">
      <div className="navbar-right">
        <img
          src={Admin} 
          alt="User Avatar"
          className="user-avatar"
        />
        
        <button className="logout-button" onClick={handleLogout}>
          <BiLogOutCircle className="logout-icon" /> 
        </button>
      </div>
    </nav>
  );
};

export default AdminNav;
