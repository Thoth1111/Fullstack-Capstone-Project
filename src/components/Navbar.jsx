import React from 'react';
import { useDispatch } from 'react-redux';
import { clearAuthInfo } from '../redux/authSlice';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpg';
import icon1 from '../assets/icon1.jpg';
import icon2 from '../assets/icon2.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon4.png';
import icon5 from '../assets/icon5.png';

function NavigationPanel() {
  const dispatch = useDispatch();

  const handleClearSession = () => {
    sessionStorage.clear();
    dispatch(clearAuthInfo());
  };

  return (
    <nav className="border text-lg font-bold fixed h-screen left-0 top-0 flex flex-col justify-between">
      <ul className="flex flex-col pl-4">
        <li className="mb-4 ml-2">
          <Link to="/Home">
            <img src={logo} alt="logo" className="w-32 h-40 rounded-lg" />
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
          <Link to="/delete" className="">
            Delete Vespa
          </Link>
        </li>
        <li className="mb-4 pr-16 py-2 pl-2 hover:bg-[#a3c837] hover:text-white">
          <Link to="/reserve" className="">
            Reserve
          </Link>
        </li>
        <li className="mb-4 pr-16 py-2 pl-2 hover:bg-[#a3c837] hover:text-white">
          <Link to="/" className="" onClick={handleClearSession}>
            Sign Out
          </Link>
        </li>
      </ul>
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
    </nav>
  );
}

export default NavigationPanel;
