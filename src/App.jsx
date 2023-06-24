import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useState } from 'react';
import SplashPage from './pages/SplashPage';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import Home from './pages/Home';
import Details from './pages/Details';
import NavigationPanel from './components/Navbar';
import AddRoom from './pages/AddRoom';
import MyReservations from './pages/MyReservations';
import AddReservations from './pages/AddReservations';
import VespaDetails from './components/VespaDetails';
import { store } from './redux/store';

import {vespaApi} from './redux/vespaAPI';



function App() {
  
  store.dispatch(vespaApi.endpoints.getAllVespas.initiate());
  store.dispatch(vespaApi.endpoints.getAllReservations.initiate());


  const location = useLocation();
  const isHomeOrDetails = location.pathname === '/home' || location.pathname === '/details';

  return (
    <>
      {isHomeOrDetails && <NavigationPanel />}
      <Routes>
        <Route path="/" element={<SplashPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/vespa/:id" element={<VespaDetails />} />
        <Route path="/details" element={<Details />} />
        <Route path="/addvespa" element={<AddRoom />} />
        <Route path="/myreservations" element={<MyReservations />} />
        <Route path="/reserve" element={<AddReservations />} />
      </Routes>
    </>
  );
}

export default App;
