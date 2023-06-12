import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminMenu = () => {
  return (
    <>
      <div className="text-center">
        <div className="list-group">
          <h4>Admin Panel</h4>
          <NavLink to="/admin/admindashboard/devices" className="list-group-item list-group-item-action">Devices</NavLink>
          <NavLink to="/admin/admindashboard/companies" className="list-group-item list-group-item-action">Companies</NavLink>
        </div>
      </div>
    </>
  )
}

export default AdminMenu
