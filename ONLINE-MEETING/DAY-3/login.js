import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [loginError, setLoginError] = useState('');

  const handleInputChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    setLoginError('');
  };

  const handleLogin = (e) => {
    e.preventDefault();

   
    const storedUser = JSON.parse(localStorage.getItem('registeredUser'));

    if (storedUser && storedUser.email === loginData.email && storedUser.newPassword === loginData.password) {
      console.log('Login successful:', storedUser);

     
      localStorage.setItem('loggedInUser', JSON.stringify(storedUser));

  
      window.location.href = '/profile';
    } else {
      console.error('Invalid credentials');
      window.alert("USERNAME OR PASSWORD INVALID");
    }
  };
  return (
    <div className='overall'>
      <div className="login-container">
        <h1>LOGIN</h1>
        <form onSubmit={handleLogin}>
          <label className='user'>
            EMAIL: <br></br><input type='text' name='email' placeholder='EMAIL' value={loginData.username} onChange={handleInputChange} />
          </label>
          <br /><br /><br />
          <label className='pass'>
            PASSWORD: <input type="password" name='password' placeholder='PASSWORD' value={loginData.password} onChange={handleInputChange} />
          </label>
          <br />
          <div className='content'>
            <button type="submit" className='link2'>
              LOGIN
            </button>
            {loginError && <p className='error-message'>{loginError}</p>}
            <br />
            <Link to="/signup" className='link'>
              Don't have an account? Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
