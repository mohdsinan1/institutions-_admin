import React, { useState } from "react";
import "./Login.css";

const LoginPopup = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>

          <button onClick={() => setShowLogin(false)}>x</button>
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? null : (
            <input type="text" placeholder="Enter Your name" required />
          )}
          <input type="email" placeholder="Enter Your email" required />
          <input type="password" placeholder="Enter Your Password" required />
        </div>
        <button className="looop">
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <p className="fry">
            By continuing, I agree to the terms of use & privacy policy.
          </p>
        </div>
        {currState === "Login" ? (
          <p className="fry">
            Create a new account?
            <span onClick={() => setCurrState("Sign Up")}> Click here</span>
          </p>
        ) : (
          <p className="fry">
            Already have an account?
            <span onClick={() => setCurrState("Login")}> Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
