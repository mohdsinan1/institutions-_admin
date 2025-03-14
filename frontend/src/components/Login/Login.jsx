import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser, signUpUser } from "../../../redux/features/AuthSlice";

const LoginPopup = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const [currState, setCurrState] = useState("Login");

const[email,setEmail] =useState("")
const[password,setPassword] = useState('')
const [name,setName] = useState('')

console.log("Name",name,"Email",email,"password",password);


  const {loading ,user,token} = useSelector((state) => state.auth)
   
  console.log(loading);
  
  const setLogin = async (e)=>{
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
  const setSignUp = async (e)=>{

    console.log("signup is working");
    
    e.preventDefault();

    dispatch(signUpUser({ email, password })).then((result)=>{
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
 
  console.log(currState);
  

  return (
    <div className="login-popup">
      <form className="login-popup-container " onSubmit={currState ==="Login"? setLogin: setSignUp}>
        <div className="login-popup-title">
          <h2>{currState}</h2>

          <button onClick={() => setShowLogin(false)}>x</button>
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? null : (
            <input type="text" placeholder="Enter Your name" required onChange={(e)=>{setName(e.target.value)}}/>
          )}
          <input type="email" placeholder="Enter Your email" required onChange={(e)=>{setEmail(e.target.value)}} />
          <input type="password" placeholder="Enter Your Password" required onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <button className="looop" type="submit">
          {loading === "loading" ? "loading .." :`${currState}` }
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