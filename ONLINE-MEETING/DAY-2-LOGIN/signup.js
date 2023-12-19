import React from 'react';
import { Link } from 'react-router-dom';
import './signup.css';

const Signup = () => {
  return (
    <div className='overall1'>
      <div className="signup-container"> 
        <h1>SIGN UP</h1>
        <form>
          <div>
          <label className='user'>EMAIL :</label><input className='value' placeholder='EMAIL'type='email'required />
          <br></br>
          <label className='phone'>PHONE :</label><input className='value' placeholder='MOBILE NUMBER'type='number'required />
          <br></br>
          <label className='address'>ADDRESS :</label><input className='value' placeholder='ADDRESS'type='text'required />
          <br></br>
          </div>
          <div>
          <label className='pass1'>NEW PASSWORD :</label><input className='value'placeholder='NEW PASSWORD'type="password" required />
          <br></br>
          <label className='pass1'>CONFIRM PASSWORD :</label><input className='value'placeholder='CONFIRM PASSWORD'type="password" required />
          <br></br>
              <button type='submit'><Link to='/admin'className='link2'>Sign Up</Link></button>
              <br></br>
          <Link to="/login" className='link'>Already have an account? Login here.</Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signup;