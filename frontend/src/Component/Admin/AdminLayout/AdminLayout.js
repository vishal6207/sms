import React from 'react'
import AdminSidebaar from '../AdminSidebaar/AdminSidebaar'
import { Outlet } from 'react-router-dom'
import './AdminOutlet.css'
import AdminNav from '../AdminNav/AdminNav'
const AdminLayout = () => {
  return (
    <div className='AdminOut'>
        <div>
            <AdminSidebaar/>
        </div>
        <div className='rightside-content'>
            <AdminNav/>
           <Outlet/>
        </div>
    </div>
  )
}

export default AdminLayout