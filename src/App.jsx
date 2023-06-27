import './App.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

import { vespaApi } from './redux/vespaAPI';
import { setHasInitialDataFetched } from './redux/authSlice';

function App() {
  const dispatch = useDispatch();

  const hasInitialDataFetched = useSelector((state) => state.persistedReducer.hasInitialDataFetched);

  // will only fire if it is the inital login
  // fetches all the data from the api and stores it in the redux store

  useEffect(
    () => {
      if (!hasInitialDataFetched) {
        dispatch(vespaApi.endpoints.getAllVespas.initiate());
        dispatch(vespaApi.endpoints.getAllReservations.initiate());
        dispatch(vespaApi.endpoints.getAllComments.initiate());
        dispatch(setHasInitialDataFetched());
      }
    },

    [hasInitialDataFetched, dispatch],
  );

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
