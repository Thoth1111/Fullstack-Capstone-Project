import React, { useState } from 'react';
import axios from 'axios';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const encryptToken = (token) => {
    const encryptedToken = CryptoJS.AES.encrypt(token, 'secret-key').toString();
    return encryptedToken;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://booking-api-nhmg.onrender.com/users/sign_up', {
        username,
        email,
        password,
        password_confirmation: passwordConfirmation,
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
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <button type="submit">Sign Up</button>
    </form>
  </div>
  );
};

export default SignUp;
