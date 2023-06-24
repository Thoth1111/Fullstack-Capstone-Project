import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearAuthInfo } from '../redux/authSlice';
import DeleteModal from './DeleteModal';
import logo from '../assets/logo.jpg';
import icon1 from '../assets/icon1.jpg';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';
import icon5 from '../assets/icon5.png';

function NavigationPanel() {
  const dispatch = useDispatch();

  const [deleteModalVisible, setdeleteModalVisible] = useState(false);
  const [showNavMenu, setShowNavMenu] = useState(false);

  const handleDelete = () => {
    setdeleteModalVisible(true);
  };

  const handleNavbar = () => {
    setShowNavMenu(!showNavMenu);
  };

  const handleCloseModal = () => {
    setdeleteModalVisible(false);
  };

  const handleSignOut = () => {
    sessionStorage.clear();
    dispatch(clearAuthInfo());
  };
  return (
    <>
      <div className={showNavMenu ? 'fixed left-0 top-0 w-full h-full z-1' : ''} onClick={handleNavbar} />
      <nav
        className={`d:border lg:border text-lg font-bold fixed h-screen left-0 top-0 flex flex-col justify-between z-10 ${
          showNavMenu ? 'w-64' : 'w-16'
        }`}
      >
        {' '}
        <div className="flex items-center justify-start">
          {/* Hamburger icon */}
          {!showNavMenu && (
            <button onClick={handleNavbar} className="bg-gray-200 rounded-full p-2 ml-2">
              <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}

          {/* Logo */}
          {showNavMenu && (
            <div className="mb-4 ml-2">
              <Link to="/">
                <img src={logo} alt="logo" className="w-40 h-35 mb-10 rounded-lg" />
              </Link>
            </div>
          )}

          {/* Close icon */}
          {showNavMenu && (
            <button onClick={handleNavbar} className="bg-gray-200 rounded-full p-2 ml-2">
              <svg className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        {showNavMenu && (
          <>
            <ul className="flex flex-col pl-4">
              <li className="mb-4 pr-14 py-2 pl-2 hover:bg-[#a3c837] hover:text-white">
                <Link to="/addvespa" className="">
                  Add Vespa
                </Link>
              </li>
              <li className="mb-4 pr-14 py-2 pl-2 hover:bg-[#a3c837] hover:text-white">
                <Link to="/myreservations" className="">
                  My Reservation
                </Link>
              </li>
              <li className="mb-4 pr-16 py-2 pl-2 hover:bg-[#a3c837] hover:text-white">
                <button className="" onClick={handleDelete}>
                  Delete Vespa
                </button>
              </li>
              <li className="mb-4 pr-16 py-2 pl-2 hover:bg-[#a3c837] hover:text-white">
                <Link to="/reserve" className="">
                  Reserve
                </Link>
              </li>
              <li className="mb-4 pr-16 py-2 pl-2 hover:bg-[#a3c837] hover:text-white">
                <Link to="/" className="" onClick={handleSignOut}>
                  Sign Out
                </Link>
              </li>
            </ul>
            {deleteModalVisible && <DeleteModal onClose={handleCloseModal} />}
            <div className="pb-8">
              <div className="flex items-center w-full justify-center align-middle mb-8 gap-x-2">
                <a href="#">
                  <img src={icon1} alt="logo" className="w-7 h-7 rounded-full" />
                </a>
                <a href="#">
                  <img src={icon2} alt="logo" className="w-7 h-7 rounded-full" />
                </a>
                <a href="#">
                  <img src={icon3} alt="logo" className="w-7 h-7" />
                </a>
                <a href="#">
                  <img src={icon4} alt="logo" className="w-7 h-7 rounded-full" />
                </a>
                <a href="#">
                  <img src={icon5} alt="logo" className="w-7 h-7 rounded-full" />
                </a>
              </div>
              <p className="text-center font-light text-gray-500">@2023</p>
            </div>
          </>
        )}
      </nav>
    </>
  );
}

export default NavigationPanel;
