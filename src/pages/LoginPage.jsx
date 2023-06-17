import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const encryptToken = (token) => {
    const encryptedToken = CryptoJS.AES.encrypt(token, 'secret-key').toString();
    return encryptedToken;
  };

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

      window.location.replace('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
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
  );
};

export default Login;
