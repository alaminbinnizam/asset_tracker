import React, { useState, useEffect } from 'react'
import Layout from '../Components/Layout'
import UserMenu from './UserMenu';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Select } from 'antd';
const { Option } = Select;


const CreateDevice = () => {
  const [categories, setCategories] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [devicename, setDevicename] = useState("");
  const [deviceSpecification, setDeviceSpecification] = useState("");
  const [deviceSerialNum, setDeviceSerialNum] = useState("");
  const [employee, setEmployee] = useState("");
  const [category, setCategory] = useState("");
  // const [status, setStatus] = useState("");

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData =  new FormData();
            productData.append("devicename", devicename)
            productData.append("deviceSpecification", deviceSpecification)
            productData.append("deviceSerialNum", deviceSerialNum)
            productData.append("employee", employee)
            productData.append("category", category)
      const { data } = await axios.post('/api/v1/device/create-device', productData );
      if (data?.success) {
        toast.success(`${data?.devicename} is Created`);
        // getAllDevice()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  }

  // //get all device
  // const getAllDevice = async () => {
  //   try {
  //     const { data } = await axios.get('/api/v1/device/getall-device');
  //     if (data?.success) {
  //       setCategories(data.category);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     toast.error('Something Went Wrong while getting categories');
  //   }
  // }
 //get all category
 const getAllCategory = async () => {
  try {
    const { data } = await axios.get('/api/v1/category/getall-category');
    if (data?.success) {
      setCategories(data.category);
    }
  } catch (error) {
    console.log(error);
    toast.error('Something Went Wrong while getting categories');
  }
}


  //get all category
  const getAllEmployees = async () => {
    try {
      const { data } = await axios.get('/api/v1/employee/getall-employees');
      if (data?.success) {
        setEmployees(data?.employee);
      }
    } catch (error) {
      console.log(error);
      toast.error('Something Went Wrong while getting employees');
    }
  }

  useEffect(() => {
    getAllEmployees()
    getAllCategory()
  },[])
 
  return (
    <Layout title={'Create Device'}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <h1>Create Device</h1>
            <div className="m-1 w-75" >
              <Select bordered={false}
                placeholder="Select a category"
                size='large' showSearch
                className='form-select mb-3' onChange={(value) => {
                  setCategory(value);
                }}>{categories?.map(c => (
                  <Option key={c._id} value={c?._id}>{c?.deviceCategory}</Option>
                ))}
              </Select>
              <Select bordered={false}
                placeholder="Select a employee"
                size='large' showSearch
                className='form-select mb-3' onChange={(value) => {
                  setEmployee(value);
                }}>{employees?.map(c => (
                  <Option key={c._id} value={c?._id}>{c?.name}</Option>
                ))}
              </Select>
              <div className="mb-3">
                <input type="text" value={devicename} placeholder='Write Device name' className='form-controll' onChange={(e)=>{
                  setDevicename(e.target.value)
                }} />
              </div>
              <div className="mb-3">
                <input type="text" value={deviceSpecification} placeholder='Write Device Speification' className='form-controll' onChange={(e)=>{
                  setDeviceSpecification(e.target.value)
                }} />
              </div>
              <div className="mb-3">
                <input type="text" value={deviceSerialNum} placeholder='Write Device Serial Number' className='form-controll' onChange={(e)=>{
                  setDeviceSerialNum(e.target.value)
                }} />
              </div>
              {/* <div className="mb-3">
                <input type="text" value={employee} placeholder='Provided Employee' className='form-controll' onChange={(e)=>{
                  setEmployee(e.target.value)
                }} />
              </div> */}
              {/* <div className="mb-3">
                <input type="text" value={devicename} placeholder='Write Device name' className='form-controll' onChange={(e)=>{
                  setDevicename(e.target.value)
                }} />
              </div> */}
              <div className="mb-3">
               <button className='btn btn-primary' onClick={handleCreate}>Create Device</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CreateDevice
