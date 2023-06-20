import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Vespa from '../components/Vespa';
import Carousel from '../components/Carousel';

// import {useGetAllVespasQuery} from  '../redux/vespaAPI'

function DummyHome() {
  const location = useLocation();
  const { state } = location;
  const success = state?.success;

  const [showNotification, setShowNotification] = useState(false);
  // const {data, error, isLoading} = useGetAllVespasQuery();

  // useEffect(() => {
  //   if (success === 'loggedin') {
  //     setShowNotification(true);

  //     const timer = setTimeout(() => {
  //       setShowNotification(false);
  //     }, 5000);

  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   }
  // }, [success]);

  return (
    <div>
      {showNotification && (
        <div className="notification">
          Logged in successfully!
        </div>
      )}

      <div className="container bg-slate-50 h-5/6 m-auto mt-24  text-center">

        <p className="text-4xl mt-8 font-bold">Latest Models</p>
        <p className="mt-4 text-lg">Please Select A Vespa Model </p>

        <Carousel />
  

      </div>
    </div>
  );
}

export default DummyHome;
