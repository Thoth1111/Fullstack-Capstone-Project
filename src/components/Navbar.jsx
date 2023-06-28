import React, { useState, useEffect } from 'react';
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

const NavigationPanel = () => {
  const dispatch = useDispatch();
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [desktopMode, setDesktopMode] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setShowNavMenu(true);
        setDesktopMode(true);
      } else {
        setShowNavMenu(false);
        setDesktopMode(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setShowNavMenu(false);
      setDesktopMode(false);
    }
  }, []);

  const handleDelete = () => {
    setDeleteModalVisible(true);
  };

  const handleNavbar = () => {
    setShowNavMenu(!showNavMenu);
  };

  const handleCloseModal = () => {
    setDeleteModalVisible(false);
  };

  const handleSignOut = () => {
    sessionStorage.clear();
    dispatch(clearAuthInfo());
  };

  return (
    <>
      <div className={showNavMenu ? 'fixed left-0 top-0 w-full h-screen z-10' : ''} onClick={handleNavbar} />
      <nav
        className={`md:border lg:border text-lg md-red-100 h-screen font-bold lg:w-fit md:w-fit fixed left-0 top-0 flex flex-col justify-between z-10 ${
          showNavMenu ? 'w-64 bg-white' : 'w-16 bg-transparent'
        }`}
      >
        <div className="flex items-center justify-start">
          {!showNavMenu ? (
            <button onClick={handleNavbar} className="p-2 ml-2 bg-gray-200 rounded-full md:hidden lg:hidden">
              <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          ) : (
            <button onClick={handleNavbar} className="p-2 ml-2 bg-gray-200 rounded-full md:hidden lg:hidden">
              <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        {(showNavMenu || desktopMode) && (
          <>
            <ul className="flex flex-col pl-4">
              <li className="top-0 mb-4 ml-2">
                <Link to="/">
                  <img src={logo} alt="logo" className="w-40 mb-10 rounded-lg h-35" />
                </Link>
              </li>
              <Link to="/addvespa" className="text-lg">
                <li className="mb-1 pr-14 py-2 pl-2 text-gray-700 hover:bg-[#a3c837] hover:text-white">
                  ADD VESPA
                </li>
              </Link>
              <Link to="/myreservations" className="text-lg">
                <li className="mb-1 pr-14 py-2 pl-2 text-gray-700 hover:bg-[#a3c837] hover:text-white">
                  MY RESERVATIONS
                </li>
              </Link>
              <button className="text-lg" onClick={handleDelete}>
                <li className="mb-1 pr-16 py-2 pl-2 text-left text-gray-700 hover:bg-[#a3c837] hover:text-white">
                  DELETE VESPA
                </li>
              </button>
              <Link to="/reserve" className="text-lg">
                <li className="mb-1 pr-16 py-2 pl-2 text-gray-700 hover:bg-[#a3c837] hover:text-white">
                  RESERVE
                </li>
              </Link>
              <Link to="/" className="text-lg" onClick={handleSignOut}>
                <li className="mb-1 pr-16 py-2 pl-2 text-gray-700 hover:bg-[#a3c837] hover:text-white">
                  SIGN OUT
                </li>
              </Link>
            </ul>
            {deleteModalVisible && <DeleteModal className="w-full" onClose={handleCloseModal} />}
            <div className="pb-8 mx-auto">
              <div className="flex items-center w-full mb-8 align-middle gap-x-2">
                <a href="#">
                  <img src={icon1} alt="logo" className="rounded-full w-5 h-5" />
                </a>
                <a href="#">
                  <img src={icon2} alt="logo" className="rounded-full w-5 h-5" />
                </a>
                <a href="#">
                  <img src={icon3} alt="logo" className="w-5 h-5" />
                </a>
                <a href="#">
                  <img src={icon4} alt="logo" className="rounded-full w-5 h-5" />
                </a>
                <a href="#">
                  <img src={icon5} alt="logo" className="rounded-full w-5 h-5" />
                </a>
              </div>
              <p className="font-light text-gray-500 text-base mx-auto text-center">@2023</p>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default NavigationPanel;
