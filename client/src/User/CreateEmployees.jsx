import React from 'react'
import Layout from '../Components/Layout'
import UserMenu from './UserMenu'

const CreateEmployees = () => {
  return (
    <Layout title={'Create Employees'}>
    <div className="container-fluid m-3 p-3">
    <div className="row">
        <div className="col-md-3">
            <UserMenu />
        </div>
        <div className="col-md-9">
            <h1>Create Employees</h1>
        </div>
    </div>
    </div>
</Layout>
  )
}

export default CreateEmployees
