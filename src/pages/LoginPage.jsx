import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { setAuthInfo,setHasInitialDataFetched } from '../redux/authSlice';
import apiRequests from '../services/ApiRequests';
import { encryptToken } from '../helpers/encryption';

function Login() {
  const location = useLocation();
  const { state } = location;
  const success = state?.success;
  const [showNotification, setShowNotification] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (success === 'signedup') {
      setShowNotification(true);

      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [success]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user, token } = await apiRequests.login(email, password);
      const { username, id } = user;
      dispatch(setAuthInfo({ username, id, token }));
      const encryptedToken = encryptToken(token);
      sessionStorage.setItem('token', encryptedToken);

      dispatch(setHasInitialDataFetched())

      navigate('/home', { state: { success: 'loggedin' } });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        {showNotification && (
          <div className="notification" style="color:green;">
            Signed up successfully
          </div>
        )}
      </div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Log In</h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-lime-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-600"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
