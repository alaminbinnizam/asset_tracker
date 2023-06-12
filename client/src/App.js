import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import DeviceLogs from './Components/DeviceLogs';
import DeviceReturn from './Components/DeviceReturn';
import Devices from './Components/Devices';
import About from './Components/About';
import Employees from './Components/Employees';
import PrivacyPolicy from './Components/PrivacyPolicy';
import Contact from './Components/Contact';
import Pagenotefound from './Components/Pagenotefound';
import PrivateRoute from './Routes/Private';
import ForgotPassword from './Components/ForgotPassword';
import Profile from './User/Profile';
import AdminRoute from './Routes/Admin';
import AdminDashboard from './Admin/AdminDashboard';
import CreateCategory from './User/CreateCategory';
import CreateDevice from './User/CreateDevice';
import Companies from './Admin/Companies';
import AdminDevices from './Admin/AdminDevices';
import CreateEmployees from './User/CreateEmployees';
import DeviceTransfer from './Components/DeviceTransfer';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/policy' element={<PrivacyPolicy />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<Pagenotefound />} />

        {/* user protected route */}
        <Route path='/user' element={<PrivateRoute />}>
          <Route path='employees' element={<Employees />} />
          <Route path='deviceLogs' element={<DeviceLogs />} />
          <Route path='devices' element={<Devices />} />
          <Route path='deviceReturn' element={<DeviceReturn />} />
          <Route path='deviceTransfer' element={<DeviceTransfer />} />
          <Route path='profile' element={<Profile />} />
          <Route path='create-category' element={<CreateCategory />} />
          <Route path='create-device' element={<CreateDevice />} />
          <Route path='create-employees' element={<CreateEmployees />} />
        </Route>
        {/* admin protected route */}
        <Route path='/admin' element={<AdminRoute/>} >
          <Route path='admindashboard' element={<AdminDashboard />} />
          <Route path='admindashboard/companies' element={<Companies />} />
          <Route path='admindashboard/devices' element={<AdminDevices />} />
        </Route>


       
      </Routes>
    </>
  );
}

export default App;
