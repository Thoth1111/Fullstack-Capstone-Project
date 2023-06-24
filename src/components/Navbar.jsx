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
    <nav className="fixed top-0 left-0 z-10 flex flex-col justify-between h-screen text-lg font-bold border">
      <ul className="flex flex-col pl-4">
        <li className="mb-4 ml-2">
          <Link to="/">
            <img src={logo} alt="logo" className="w-40 mb-10 rounded-lg h-35" />
          </Link>
        </li>
        <li className="mb-4 pr-14 py-2 pl-2 hover:bg-[#a3c837] hover:text-white">
          <Link to="/addroom" className="">
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
        <div className="flex items-center justify-center w-full mb-8 align-middle gap-x-2">
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
    </nav>
  );
}

export default NavigationPanel;
