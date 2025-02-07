import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './Signup';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import FarmerDashboard from "./FarmerDashboard";
import MerchantDashboard from "./MerchantDashboard";
import Navbar from "./components/NavBar";
import HomePage from './HomePage';
import Settings from './Setting';
import Profile from './Profile';
import Logout from './Logout';
import Buy from './Buy'; // Import the Buy component
import ResponsiveAppBar from "./components/ResponsiveAppBar"; // Import the new AppBar component
import './App.css'; // Import the CSS file
import ContactUs from './ContactUs';
import AboutUs from './AboutUs';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <ResponsiveAppBar />
        <div className="app-container">
          <div className="main-content">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/register' element={<Signup />} />
              <Route path='/login' element={<Login />} />
              <Route path="/farmerdashboard" element={<FarmerDashboard />} />
              <Route path="/merchantdashboard" element={<MerchantDashboard />} />
              <Route path="/HomePage" element={<HomePage />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/buy" element={<Buy />} /> {/* Add the route for Buy component */}
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/aboutus" element={<AboutUs />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;