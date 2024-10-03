import React from 'react';
import { Outlet } from 'react-router-dom';
import StudentSidebaar from '../StudentSidebaar/StudentSidebaar';
import './Student.css';
import Navbar from '../Navbar/Navbar';
import { useEffect } from 'react';

const StudLayout = () => {
  useEffect(() => {
    
    document.body.classList.add('no-scroll');
    
    
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);
  return (
    <div>
      <Navbar />
      <div className='app-container'>
        <StudentSidebaar />
        <div className='content-container'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default StudLayout;
