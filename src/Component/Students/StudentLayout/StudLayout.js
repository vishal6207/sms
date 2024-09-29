import React from 'react'
import { Outlet } from 'react-router-dom'
 import StudentSidebaar from '../StudentSidebaar/StudentSidebaar'
 import './Student.css'
const StudLayout = () => {
  return (
    <div className='Sidebaar'>
         <div>
         <StudentSidebaar/>
         </div>
         <div className='main-Content'>
         <Outlet/>
         </div>
    </div>
  )
}

export default StudLayout