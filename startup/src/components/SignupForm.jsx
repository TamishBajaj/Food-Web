/* eslint-disable no-unused-vars */



import React from 'react';
import '../styling/SignUp.css'; // Import your CSS file for styling

const SignupForm = () => {

  
  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2 className="main-heading">Sign Up</h2>
        <form>
          <div className="form-group">
            <input type="text" id="name" placeholder="Name" />
          </div>
          <div className="form-group">
            <input type="email" id="email" placeholder="Email ID" />
          </div>
          <div className="form-group">
            <input type="tel" id="phone" placeholder="Phone Number" />
          </div>
          <div className="form-group">
            <input type="password" id="password" placeholder="Enter Password" />
          </div>
          <div className="form-group">
            <input type="password" id="confirmPassword" placeholder="Confirm Password" />
          </div>
          <button type="submit" className='signup-button'>Sign UP</button>
        </form>
        <div className="signup-google">
          <button>Sign Up with Google</button>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
