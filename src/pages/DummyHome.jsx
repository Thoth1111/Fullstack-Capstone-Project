import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Vespa from '../components/Vespa';
import Carousel from '../components/Carousel';

function DummyHome() {
  const location = useLocation();
  const { state } = location;
  const success = state?.success;

  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (success === 'loggedin') {
      setShowNotification(true);

      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [success]);

  return (
    <div>
      {showNotification && (
        <div className="notification">
          Logged in successfully!
        </div>
      )}

      <div className="container bg-red-100 h-screen m-auto text-center">

        <p className="text-4xl">Latest Models</p>
        <p className="">Please Select A Vespa Model </p>

          <Carousel/>
        <div className="flex bg-red-300 h-3/6 my-32  justify-around items-center mx-10">
        
        </div>

      </div>
    </div>
  );
}

export default DummyHome;
