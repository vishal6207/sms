// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
 import TeacherSidebar from '../TeacherSidebar';
import './Layout.css'
import Navbar from '../../../Students/Navbar/Navbar';

const Layout = () => {
     console.log("hlo world")
  return (
    <div className='mycontent'>
      {/* Sidebar on the left */}
      <TeacherSidebar />
      {/* Outlet for nested routes */}
      <div className='main-content'>
        <Navbar/>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
