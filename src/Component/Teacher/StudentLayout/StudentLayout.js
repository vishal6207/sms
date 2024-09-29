import React from 'react'
import { Outlet } from 'react-router-dom';
import Student from '../Student/Student';
const StudentLayout = () => {
    console.log("my world");
    return (
        <div>
          <h2>Student Section</h2>
          <Outlet />
        </div>
      );
};

export default StudentLayout