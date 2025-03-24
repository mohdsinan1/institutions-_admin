import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function StatusProtectedRoute({ children }) {
  const status = useSelector((state) => state.profile.status) || localStorage.getItem("institutionStatus");

  console.log("StatusProtectedRoute: Institution Status =>", status);

if (status === "Rejected"){
  return <Navigate to ="/rejected-profile"/>
}


  if (status !== "Approved") {
    return <Navigate to="/not-authorized" />; // Redirect if status is not approved
  }

  return children; // Allow access if status is approved
}

export default StatusProtectedRoute;
