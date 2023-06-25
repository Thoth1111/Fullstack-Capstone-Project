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

function NavigationPanel() {
  const dispatch = useDispatch();
  const [deleteModalVisible, setdeleteModalVisible] = useState(false);
  const [showNavMenu, setShowNavMenu] = useState(false);
  const [desktopMode, setdesktopMode] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setShowNavMenu(true);
        setdesktopMode(true);
      } else {
        setShowNavMenu(false);
        setdesktopMode(false);
      }
    };

    // Add event listener to the window resize event
    window.addEventListener('resize', handleResize);
    // Remove event listener when component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Set showNavMenu to false when the screen size changes
    if (window.innerWidth <= 640) {
      setShowNavMenu(false);
    }
  }, [window.innerWidth]);

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
      <div className={showNavMenu ? 'fixed left-0 top-0 w-full w-full h-screen z-10' : ''} onClick={handleNavbar} />
      <nav
        className={`md:border lg:border text-lg h-screen font-bold lg:w-fit md:w-fit fixed left-0 top-0 flex flex-col justify-between z-10 ${
          showNavMenu ? 'w-64 bg-white' : 'w-16 bg-transparent'
        }`}
      >
        {' '}
        <div className="flex items-center justify-start">
          {/* Hamburger icon */}
          {!showNavMenu && (
            <button onClick={handleNavbar} className="p-2 ml-2 bg-gray-200 rounded-full">
              <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          )}

          {/* Logo */}
          {showNavMenu && (
            <div className="mb-4 ml-2">
              <Link to="/">
                <img src={logo} alt="logo" className="w-40 mb-10 rounded-lg h-35" />
              </Link>
            </div>
          )}

          {/* Close icon */}
          {showNavMenu && (
            <button onClick={handleNavbar} className="p-2 ml-2 bg-gray-200 rounded-full">
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
            <div className="pb-8 ml-4">
              <div className="flex items-center w-full mb-8 align-middle gap-x-2">
                <a href="#">
                  <img src={icon1} alt="logo" className="rounded-full w-7 h-7" />
                </a>
                <a href="#">
                  <img src={icon2} alt="logo" className="rounded-full w-7 h-7" />
                </a>
                <a href="#">
                  <img src={icon3} alt="logo" className="w-7 h-7" />
                </a>
                <a href="#">
                  <img src={icon4} alt="logo" className="rounded-full w-7 h-7" />
                </a>
                <a href="#">
                  <img src={icon5} alt="logo" className="rounded-full w-7 h-7" />
                </a>
              </div>
              <p className="font-light text-center text-gray-500">@2023</p>
            </div>
          </>
        )}
      </nav>
    </>
  );
}

export default NavigationPanel;
