import React from 'react'

import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

function ProtectRoute({children}) {
    const token = useSelector((state) => state.auth.token)
  console.log("token",token);
  
    
  return token?children: <Navigate to="/"/>;

    
  
}

export default ProtectRoute