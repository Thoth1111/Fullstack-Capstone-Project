import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { clearToken } from './redux/authSlice';

const AppWrapper = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [TokenExpired, setTokenExpired] = useState(false);
  const token = sessionStorage.getItem('token');
  const tokenLife = 6 * 60 * 60 * 1000;

  useEffect(() => {
    if (!token && !isLoginOrSignupPath(location.pathname)) {
      setTokenExpired(true);
    }
  }, [location.pathname, token]);

  useEffect(() => {
    if (token) {
      const tokenTimeout = setTimeout(() => {
        dispatch(clearToken());
        setTokenExpired(true);
      }, tokenLife);

      return () => clearTimeout(tokenTimeout);
    }
  }, [dispatch, token]);

  const isLoginOrSignupPath = (pathname) => {
    return pathname === '/login' || pathname === '/signup' || pathname === '/';
  };

  if (TokenExpired || (!token && !isLoginOrSignupPath(location.pathname))) {
    navigate('./');
  }

  return <>{children}</>;
};

export default AppWrapper;
