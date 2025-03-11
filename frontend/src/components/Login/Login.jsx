import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const LoginPopup = ({ setShowLogin }) => {
  const navigate = useNavigate()
  const [currState, setCurrState] = useState("Login");
const[email,setemail] =useState('')
const[password,setPassword] = useState('')
// console.log("email",email);

//   console.log("pass",password);
  
  const setauthentication =(e)=>{
    e.preventDefault();
    if(email === "adhil@gmail.com" && password ==="12345678"){
      navigate('/createprofile')
      console.log("worked");
      
    }else{
      console.log("Invalid Credentials!");
      
    }
  }

  return (
    <div className="login-popup">
      <form className="login-popup-container " onSubmit={setauthentication}>
        <div className="login-popup-title">
          <h2>{currState}</h2>

          <button onClick={() => setShowLogin(false)}>x</button>
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? null : (
            <input type="text" placeholder="Enter Your name" required />
          )}
          <input type="email" placeholder="Enter Your email" required onChange={(e)=>{setemail(e.target.value)}} />
          <input type="password" placeholder="Enter Your Password" required onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <button className="looop" type="submit">
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