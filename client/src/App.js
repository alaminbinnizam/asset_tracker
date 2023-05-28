import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import DeviceLogs from './Components/DeviceLogs';
import DeviceReturn from './Components/DeviceReturn';
import DeviceCheckout from './Components/DeviceCheckout';
import Devices from './Components/Devices';
import About from './Components/About';
import Employees from './Components/Employees';
import PrivacyPolicy from './Components/PrivacyPolicy';
import Contact from './Components/Contact';
import Pagenotefound from './Components/Pagenotefound';


function App() {
  // let location = useLocation();

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/employees' element={<Employees />} />
        <Route path='/deviceLogs' element={<DeviceLogs />} />
        <Route path='/devices' element={<Devices />} />
        <Route path='/deviceReturn' element={<DeviceReturn />} />
        <Route path='/deviceCheckout' element={<DeviceCheckout />} />
        <Route path='/policy' element={<PrivacyPolicy />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<Pagenotefound />} />
      </Routes>
    </>
  );
}

export default App;
