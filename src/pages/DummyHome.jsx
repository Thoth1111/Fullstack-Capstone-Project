import React from 'react';
import { useLocation } from 'react-router-dom';

const DummyHome = () => {
  const location = useLocation();
  const { state } = location;
  const success = state?.success;

  return (
    <div>
      {success === 'loggedin' && (
        <div className="notification">
          Logged in successfully
        </div>
      )}
    </div>
  );
};

export default DummyHome;
