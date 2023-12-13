import React from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
  return (
    <div className='overall'>
      <div className='pic'>
        <img src="https://account.asus.com/img/login_img02.png" alt="loosu" width='450px' height='450px'></img>
      </div>
      <div className="login-container"> 
        <h2>LOGIN</h2>
        <form>
          <label className='user'>USERNAME :<input type='email'placeholder='USERNAME'/></label>
          <br></br>
          <br></br>
          <br></br>
          <label className='pass'>PASSWORD :<input type="password" placeholder='PASSWORD'/></label>
          <br></br>
          <div className='content'>
              <button><Link to='/admin'className='link2'>LOGIN</Link></button>
              <br></br>
          <Link to="/signup" className='link'>Don't have an account? Sign up here.</Link>
        </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
