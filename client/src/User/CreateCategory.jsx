import React from 'react'
import Layout from '../Components/Layout'
import UserMenu from './UserMenu'

const CreateCategory = () => {
  return (
    <Layout title={'Create Category'}>
    <div className="container-fluid m-3 p-3">
    <div className="row">
        <div className="col-md-3">
            <UserMenu />
        </div>
        <div className="col-md-9">
            <h1>Create Category</h1>
        </div>
    </div>
    </div>
</Layout>
  )
}

export default CreateCategory
