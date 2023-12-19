import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      // Make the fetch request
      const response = await fetch('http://localhost:3015/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      // Check if the response status is ok (2xx)
      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data.message);
        // Perform actions after successful login, such as updating state or redirecting
      } else {
        // Handle non-successful responses (e.g., 401 Unauthorized)
        console.error('Login failed:', response.statusText);
        // Handle unsuccessful login
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div className='overall'>
      <div className="login-container"> 
        <h1>LOGIN</h1>
        <form onSubmit={handleLogin}>
          <label className='user'>USERNAME: <input type='email' placeholder='USERNAME' value={username} onChange={handleUsernameChange} /></label>
          <br /><br /><br />
          <label className='pass'>PASSWORD: <input type="password" placeholder='PASSWORD' value={password} onChange={handlePasswordChange} /></label>
          <br />
          <div className='content'>
            <button type="submit" className='link2'>LOGIN</button>
            <br />
            <Link to="/signup" className='link'>Don't have an account? Sign up here.</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
