import React from 'react'

import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

function ProtectRoute({children}) {
  console.log("protect route is working");
  
    const token = useSelector((state) => state.auth.token)||localStorage.getItem("tokenaccess")
    
  console.log("token",token);
  
    
  return token?children: <Navigate to="/"/>;

    
  
}

export default ProtectRoute