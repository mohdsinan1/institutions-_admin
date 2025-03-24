import React from 'react'

function RejectedProfile() {
  return (
    <div className="container text-center mt-5">
    <h2 className="text-danger">Access Denied</h2>
    <p>Your institution is Rejected. Please create Profile.</p>
    <button className="btn btn-primary" onClick={()=>navigate("/createprofile")}>
      Create Profile
    </button>
  </div>
  )
}

export default RejectedProfile