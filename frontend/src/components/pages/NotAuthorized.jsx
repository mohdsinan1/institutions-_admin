import React from "react";
import { useNavigate } from "react-router-dom";


function NotAuthorized() {
const navigate = useNavigate()

  return (
    <div className="container text-center mt-5">
      <h2 className="text-danger">Access Denied</h2>
      <p>Your institution is not approved yet. Please wait for admin approval.</p>
      <button className="btn btn-primary" onClick={()=>navigate("/viewprofile")}>
        Back
      </button>
    </div>
  );
}

export default NotAuthorized;
