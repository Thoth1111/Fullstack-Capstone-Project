import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAuthInfo, setHasInitialDataFetched } from '../redux/authSlice';
import apiRequests from '../services/ApiRequests';
import { encryptToken } from '../helpers/encryption';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setError('');

      const { user, token } = await apiRequests.login(email, password);
      const { username, id } = user;
      dispatch(setAuthInfo({ username, id, token }));
      const encryptedToken = encryptToken(token);
      sessionStorage.setItem('token', encryptedToken);

      // set the boolean to false so that the useEffect in App.jsx can fire
      dispatch(setHasInitialDataFetched());
      navigate('/home');
    } catch (error) {
      console.error(error);
      setError('Incorrect email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading ? (
        <div className="flex min-h-screen bg-[#FFB400] flex-1 justify-center items-center">
          <div className="flex flex-col h-1/3 w-1/3 p-6 items-center bg-white rounded-lg">
            <span className="animate-spin rounded-full h-10 w-10 mb-8 border-t-2 border-b-2 border-l-4 border-lime-500"></span>
            <p className="font-bold">Signing in...</p>
          </div>
        </div>
      ) : (
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Log In</h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {error && (
            <p className="text-red-500 text-center mb-4 mx-auto">{error}</p>
          )}
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} />
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
                  required
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
      )}
    </>
  );
}

export default Login;
