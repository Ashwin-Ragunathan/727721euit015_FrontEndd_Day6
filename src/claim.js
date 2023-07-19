import React from 'react'
import './claim.css';
import './dashboard';
import {Link} from 'react-router-dom';
function claim() {
  return (
    <div>
        <br></br>
        <br></br>
      <div class="valid">
       <center> <h2>Claims Portal</h2></center>
       <center> <h5>Allows insurance customers to quickly report personal property losses.</h5></center>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
       <br></br>
        <center><p>Your claim will be processes after verification and validation</p></center>
      </div>
      <div class="mine01">
      <Link to="/dashboard">
      <button>Back to Dashboard</button>
      </Link></div>
    </div>
  )
}

export default claim