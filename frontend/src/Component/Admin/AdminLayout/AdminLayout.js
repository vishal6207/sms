import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import "./AdminOutlet.css"; 
import AdminNav from '../AdminNav/AdminNav'; 
import AdminSidebaar from '../AdminSidebaar/AdminSidebaar'; 

const Layout = () => {
  useEffect(() => {
    
    document.body.classList.add('no-scroll');
    
    
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <div>
      <AdminNav />
      <div className="app-container">
        <AdminSidebaar />
        <div className="content-container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
