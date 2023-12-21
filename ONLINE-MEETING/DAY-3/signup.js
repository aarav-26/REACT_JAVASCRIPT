import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signup.css';

const Signup = () => {
  const [signupData, setSignupData] = useState({
    email: '',
    phone: '',
    address: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    localStorage.setItem('registeredUser', JSON.stringify(signupData));

    window.location.href = '/login';
  };
  return (
    <div className='overall1'>
      <div className="signup-container"> 
        <h1>SIGN UP</h1>
        <form onSubmit={handleSignup}>
          <div>
            <label className='user'>EMAIL :</label>
            <input
              className='value'
              placeholder='EMAIL'
              type='email'
              name='email'
              value={signupData.email}
              onChange={handleInputChange}
              required
            />
            <br></br>
            <label className='phone'>PHONE :</label>
            <input
              className='value'
              placeholder='MOBILE NUMBER'
              type='number'
              name='phone'
              value={signupData.phone}
              onChange={handleInputChange}
              required
            />
            <br></br>
            <label className='address'>ADDRESS :</label>
            <input
              className='value'
              placeholder='ADDRESS'
              type='text'
              name='address'
              value={signupData.address}
              onChange={handleInputChange}
              required
            />
            <br></br>
          </div>
          <div>
            <label className='pass1'>NEW PASSWORD :</label>
            <input
              className='value'
              placeholder='NEW PASSWORD'
              type="password"
              name='newPassword'
              value={signupData.newPassword}
              onChange={handleInputChange}
              required
            />
            <br></br>
            <label className='pass1'>CONFIRM PASSWORD :</label>
            <input
              className='value'
              placeholder='CONFIRM PASSWORD'
              type="password"
              name='confirmPassword'
              value={signupData.confirmPassword}
              onChange={handleInputChange}
              required
            />
            <br></br>
            <button type='submit' className='link2'>Sign Up</button>
            <br></br>
            <Link to="/login" className='link'>Already have an account? Login here.</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
