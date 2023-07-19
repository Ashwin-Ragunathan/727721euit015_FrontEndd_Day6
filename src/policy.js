import React from 'react'
import './policy.css';
import './dashboard';
import {Link} from 'react-router-dom';
function policy() {
  return (
    <div>
      <div class="policy">
        <br></br>
        <br></br>
        
        <center><h1>Policy Types and Coverage </h1></center>
        <br></br>
        <br></br>
        <h3>1. Liability coverage</h3>
        <p>Auto liability coverage is mandatory in most states. Drivers are legally required to purchase at least the minimum amount of liability coverage set by state law. Liability coverage has two components:</p>
       
          <p>//Bodily injury liability may help pay for costs related to another person's injuries if you cause an accident</p> 
           <p> //Property damage liability may help pay for damage you cause to another person's property while driving</p>
      <center><div class="good">
        <button>APPLY POLICY</button>
        </div></center>
        <br></br>
        <br></br>
        <h3>2. Uninsured and underinsured motorist coveragee</h3>
        <p>If you're hit by a driver who doesn't have insurance, uninsured motorist coverage may help pay for your medical bills or, in some states, repairs to your vehicle. If you're hit by an underinsured driver, that means they have car insurance, but their liability limits aren't enough to cover your resulting medical bills. That's where underinsured motorist coverage may help, depending on the laws of your state.</p>
       
          <p>Uninsured and underinsured motorist coverage is required in some states and optional in other states.</p> 
      <center><div class="good">
        <button>APPLY POLICY</button>
        </div></center>
        <br></br>
        <br></br>
        <h3>3. Comprehensive coverage</h3>
        <p>Comprehensive may help cover damage to your car from things like theft, fire, hail or vandalism. If your car is damaged by a covered peril, comprehensive coverage may help pay to repair or replace your vehicle (up to the vehicle's actual cash value). This coverage has a deductible, which is the amount you'll pay out of pocket before your insurer reimburses you for a covered claim.</p>
       
          <p>Comprehensive is typically an optional coverage — but your lender may require it if you're leasing or paying off your vehicle.</p> 
      <center><div class="good">
        <button>APPLY POLICY</button>
        </div></center>
        <br></br>
        <br></br>
        <h3>4. Collision coverage</h3>
        <p>If you're involved in an accident with another vehicle, or if you hit an object such as a fence, collision coverage may help pay to repair or replace your car (up to its actual cash value and minus your deductible).</p>
       
          <p>Collision coverage is typically optional. It may be required, however, by your vehicle's leaseholder or lender.</p> 
      <center><div class="good">
        <button>APPLY POLICY</button>
        </div></center>
     </div>
      <div class="mine">
      <Link to="/dashboard">
      <button>Back to Dashboard</button>
      </Link></div>
    </div>
  )
}

export default policy