import React from 'react'
import Layout from '../Components/Layout'
import AdminMenu from './AdminMenu'

const AdminDevices = () => {
  return (
    <Layout title={'Dashboard All Devices'}>
    <div className="container-fluid m-3 p-3">
    <div className="row">
        <div className="col-md-3">
            <AdminMenu />
        </div>
        <div className="col-md-9">
            <h1>All Devices</h1>
        </div>
    </div>
    </div>
</Layout>
  )
}

export default AdminDevices
