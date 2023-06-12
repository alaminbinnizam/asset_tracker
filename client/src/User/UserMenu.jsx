import React from 'react'
import { NavLink } from 'react-router-dom'

const UserMenu = () => {
    return (
        <>
            <div className="text-center">
                <div className="list-group">
                    <h4>Profile</h4>
                    <NavLink to="/user/create-category" className="list-group-item list-group-item-action">Create Device Category</NavLink>
                    <NavLink to="/user/create-device" className="list-group-item list-group-item-action">Create Device</NavLink>
                    <NavLink to="/user/create-employees" className="list-group-item list-group-item-action">Create-Employees</NavLink>
                </div>
            </div>
        </>
    )
}

export default UserMenu
