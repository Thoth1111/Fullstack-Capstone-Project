import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import SplashPage from './pages/SplashPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import Details from './pages/Details';
import NavigationPanel from './components/Navbar';
import AddRoom from './pages/AddRoom';
import MyReservations from './pages/MyReservations';
import AddReservations from './pages/AddReservations';
import Toast from './components/Toast';
import { useState } from 'react';


function App() {

  const [showToast, setShowToast] = useState(true);
  
  const location = useLocation();
  const isHomeOrDetails = location.pathname === '/home' || location.pathname === '/details';

  return (
    <>
     {/* { showToast &&  <Toast message="Hey" type="error" />} */}
      {isHomeOrDetails && <NavigationPanel />}
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/addroom" element={<AddRoom />} />
        <Route path="/myreservations" element={<MyReservations />} />
        <Route path="/reserve" element={<AddReservations />} />
      </Routes>
    </>
  );
}

export default App;
