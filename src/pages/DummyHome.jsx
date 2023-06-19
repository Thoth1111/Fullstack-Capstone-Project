import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const DummyHome = () => {
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
      <h1>Home</h1>
    </div>
  );
};

export default DummyHome;
