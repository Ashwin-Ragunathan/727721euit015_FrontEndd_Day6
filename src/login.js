import React, { useState } from "react";
import "./login.css";
import "./dashboard";         
import {Link} from 'react-router-dom';

const Login = (props) => {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(email);
  }

  return (
    <div className="wrap">
      
    <div className='container'>
      <>
      {/* <img id="loginimg" src="https://as2.ftcdn.net/v2/jpg/02/16/47/33/1000_F_216473351_FCLq1pZQOBFrgcyPBphKvBd8Z5wjD1dI.jpg"></img> */}
        <h1 id='header'><span id='l' >L</span>ogin</h1>
        <form id='loginform'>
          <label id='email' for='email' onSubmit={handleSubmit}>Email</label>
          <br></br>
          <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}placeholder='abc@gmail.com' id='email' name='email'/>
          <br></br>
          <label for='password'>Password</label>
          <br></br>
          <input type='password' value={pass} onChange={(e)=>setPass(e.target.value)} placeholder='***' id='password' name='password'/>
          <br></br>
          <Link to="/dashboard"><button id='loginbtn' type='submit'>Log In</button></Link>
          <p id='o1'>Don't have an Account?</p>

          <Link to='/signup'>
        <button id='btn'> Register here</button>
          </Link>
        </form>
      </>
    </div>
    </div>

  )
}

export default Login