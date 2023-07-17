import React, { useState } from 'react'
import Layout from '../Components/Layout'
import UserMenu from './UserMenu'

const CreateEmployees = () => {
  const [employeeId, setEmployeeId] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [position, setPosition] = useState();
  const [department, setDepartment] = useState();
  const [address, setAddress] = useState();

  //handle create
  const handleCreate = async(e)=>{
    
  }
  return (
    <>
      <Layout title={'Create Device'}>
        <div className="container-fluid m-3 p-3">
          <div className="row">
            <div className="col-md-3">
              <UserMenu />
            </div>
            <div className="col-md-9">
              <h1>Create Device</h1>
              <div className="m-1 w-75" >

                <div className="mb-3">
                  <input type="text" value={employeeId} placeholder='Write Device Speification' className='form-controll' onChange={(e) => {
                    setEmployeeId(e.target.value)
                  }} />
                </div>
                <div className="mb-3">
                  <input type="text" value={name} placeholder='Write Device name' className='form-controll' onChange={(e) => {
                    setName(e.target.value)
                  }} />
                </div>
                <div className="mb-3">
                  <input type="text" value={email} placeholder='Write Device Speification' className='form-controll' onChange={(e) => {
                    setEmail(e.target.value)
                  }} />
                </div>
                <div className="mb-3">
                  <input type="text" value={position} placeholder='Write Device Serial Number' className='form-controll' onChange={(e) => {
                    setPosition(e.target.value)
                  }} />
                </div>
                <div className="mb-3">
                  <input type="text" value={department} placeholder='Provided Employee' className='form-controll' onChange={(e) => {
                    setDepartment(e.target.value)
                  }} />
                </div>
                <div className="mb-3">
                  <input type="text" value={address} placeholder='Provided Employee' className='form-controll' onChange={(e) => {
                    setAddress(e.target.value)
                  }} />
                </div>
                <div className="mb-3">
               <button className='btn btn-primary' onClick={handleCreate}>Create Device</button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default CreateEmployees

