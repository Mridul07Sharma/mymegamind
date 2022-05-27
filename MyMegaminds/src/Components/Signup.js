import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";

function Signup() {
  return (
    <div className="signup">
      <h3 className="signup__select">Please select one!</h3>
      <div className="signup__option">
        <Link className="signup__link" to="./student">
          <div className="signup__student">
            <h4>Register as Student</h4>
            <br />
            <img className="signup__sicon" src="sicon.png" alt="Student Icon" />
          </div>
        </Link>
        <Link className="signup__link" to="./tutor">
          <div className="signup__tutor">
            <h4> Register as Tutor</h4>
            <br />

            <img className="signup__ticon" src="ticon.png" alt="Teacher Icon" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
