import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../../redux/features/AuthSlice";

const LoginPopup = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const [currState, setCurrState] = useState("Login");

const[email,setemail] =useState("")

const[password,setPassword] = useState('')

console.log("email",email);

  console.log("pass",password);


  const {loading ,user,token} = useSelector((state) => state.auth)
   
  console.log(status);
  
  const setauthentication = async (e)=>{
    e.preventDefault();

    dispatch(loginUser({ email, password })).then((result)=>{
      if (result.meta.requestStatus === "fulfilled"){
        console.log(user,token);
        navigate('/createprofile')
      }
      else{
        console.log("login  failed");
        navigate("/");
        
      }
    })    
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
          {status ==="loading"? "loading .." : "login"}
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