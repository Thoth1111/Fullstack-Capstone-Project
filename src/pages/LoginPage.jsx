import React, { useState } from 'react';
import { encryptToken } from '../helpers/encryption';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const location = useLocation();
  const { state } = location;
  const success = state?.success;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://booking-api-nhmg.onrender.com/users/sign_in', {
        email,
        password,
      });

      const { token } = response.data;
      const encryptedToken = encryptToken(token);
      sessionStorage.setItem('token', encryptedToken);

      navigate('/dummyHome', { state: { success: 'loggedin' } })
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        {success === 'signedup' && (
          <div className="notification">
            Signed up successfully
          </div>
        )}
      </div>
      <div>
        <h2>Log In</h2>
        <form onSubmit={handleSubmit}>
          <input 
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Log In</button>
        </form>
      </div>
    </>
  );
};

export default Login;
