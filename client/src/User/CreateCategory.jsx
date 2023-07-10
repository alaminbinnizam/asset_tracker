import React, { useEffect, useState } from 'react'
import Layout from '../Components/Layout'
import UserMenu from './UserMenu'
import { toast } from 'react-hot-toast';
import axios from 'axios';
import CategoryForm from './Form/CategoryForm';
import { Button, Modal } from 'antd';


const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [deviceCategory, setDeviceCategory] = useState("");
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState(null);
  const [updatedName, setUpdatedName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/v1/category/create-category', { deviceCategory });
      if (data?.success) {
        toast.success(`${deviceCategory} is Created`);
        getAllCategory()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong');
    }
  }

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
  //updating category
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`/api/v1/category/update-category/${selected?._id}`,
        { deviceCategory: updatedName });
      if (data?.success) {
        toast.success(`${updatedName} is Updated`)
        setSelected(null)
        setUpdatedName("")
        setVisible(false)
        getAllCategory()
      } else {
        toast.error(data?.message)
      }
    } catch (error) {
      console.log(error);
      toast.error('Something Went Wrong!')
    }
  }
  //deleting category
  const handleDelete = async (pid) => {
    try {
      const { data } = await axios.delete(`/api/v1/category/delete-category/${pid}`);
      if (data?.success) {
        toast.success(`${deviceCategory} is Deleted`);
        getAllCategory()
      } else {
        toast.error(data?.message)
      }
    } catch (error) {
      console.log(error);
      toast.error('Something Went Wrong!')
    }
  }

  useEffect(() => {
    getAllCategory();
  }, [])

  return (
    <>
      <Layout title={'Create Category'} >
        <div className="container-fluid m-3 p-3">
          <div className="row">
            <div className="col-md-3">
              <UserMenu />
            </div>
            <div className="col-md-9">
              <h1>Create Category</h1>
              <div className="p-3 w-50">
                <CategoryForm handleSubmit={handleSubmit} value={deviceCategory} setValue={setDeviceCategory} />
              </div>
              <div className="w-75">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {categories?.map(c => (
                      <>
                        <tr>
                          <td key={c._id}>{c.deviceCategory}</td>
                          <td>
                            <button className='btn
                          btn-primary btn-sm ms-2'
                              onClick={() => { setVisible(true); setUpdatedName(c.deviceCategory); setSelected(c) }}
                            >Edit</button>
                            <button className='btn
                          btn-danger btn-sm ms-2'
                              onClick={() => { handleDelete(c._id) }}
                            >Delete</button>
                          </td>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
              <Modal onCancel={() => setVisible(false)} visible={visible} footer={null}>
                <CategoryForm value={updatedName} setValue={setUpdatedName}
                  handleSubmit={handleUpdate} />
              </Modal>
            </div>
          </div>
        </div>
      </Layout >
    </>
  )
}

export default CreateCategory


