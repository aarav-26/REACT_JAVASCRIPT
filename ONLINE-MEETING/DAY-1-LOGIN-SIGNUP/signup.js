import React from 'react';
import { Link } from 'react-router-dom';
import './signup.css';

const Signup = () => {
  return (
    <div className='overall1'>
      <div className='pic1'>
        <img src="https://eddy.com/wp-content/uploads/2020/05/The-Do%E2%80%99s-and-Don%E2%80%99ts-of-Scheduling-Meetings@2x-100.jpg" alt="loosu" width='900px' height='650px'></img>
      </div>
      <div className="signup-container"> 
        <h2>SIGN UP</h2>
        <form>
          <label className='user'>USERNAME OR EMAIL :</label><input className='value' placeholder='USERNAME OR EMAIL'type='email'required />
          <br></br>
          <br></br>
          <label className='pass1'>NEW PASSWORD :</label><input className='value'placeholder='NEW PASSWORD'type="password" required />
          <br></br>
          <label className='pass1'>CONFIRM PASSWORD :</label><input className='value'placeholder='CONFIRM PASSWORD'type="password" required />
          <br></br>
              <button type='submit'><Link to='/admin'className='link2'>Sign Up</Link></button>
              <br></br>
          <Link to="/login" className='link'>Already have an account? Login here.</Link>
        </form>
      </div>
    </div>
  );
};
export default Signup;