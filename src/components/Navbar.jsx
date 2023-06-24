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

  const handleDelete = () => {
    setdeleteModalVisible(true);
  };

  const handleCloseModal = () => {
    setdeleteModalVisible(false);
  };

  const handleSignOut = () => {
    sessionStorage.clear();
    dispatch(clearAuthInfo());
  };

  return (
    <nav className="border text-lg w-full font-bold fixed md:h-screen lg:h-screen h-full lg:left-0 md:left-0 top-0 flex lg:flex-col md:flex-col md:justify-between lg:justify-between z-10">
      <ul className="flex pl-4 w-full md:h-screen lg:h-screen h-fit items-center md:items-start lg:items-start lg:flex-col md:flex-col">
        <li className="mb-4 ml-2">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="w-20 md:w-40 lg:w-40 h-10 md:h-25 lg:h-35 lg:mb-10 md:mb-10 mt-1 rounded-lg"
            />
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
      <div className="pb-8  md:h-screen items-center lg:h-screen h-fit">
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
        <p className="text-center font-light hidden lg:block md:block text-gray-500">@2023</p>
      </div>
    </nav>
  );
}

export default NavigationPanel;
