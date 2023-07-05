import React, { useEffect, useState } from 'react'
import Layout from '../Components/Layout'
import UserMenu from './UserMenu'
import { toast } from 'react-hot-toast';
import axios from 'axios';
import CategoryForm from './Form/CategoryForm';

const CreateCategory = () => {
  const [categories, setCategories] = useState([]);
  const [deviceCategory, setDeviceCategory] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/v1/category/create-category', { deviceCategory });
      if (data.success) {
        toast.success(`${data?.deviceCategory} is Created`);
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

  useEffect(() => {
    getAllCategory();
  }, [])

  return (
    <Layout title={'Create Category'}>
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
                          <button className='btn btn-primary'>Edit</button>
                        </td>
                      </tr>
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CreateCategory
