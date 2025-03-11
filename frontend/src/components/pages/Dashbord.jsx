import React from "react";
import { NavLink } from "react-router-dom";
import "../style/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        Institute Admin
      </div>
      
      <div className="dashboard-menu">
        <ul>
          <li>
            <NavLink to="/viewprofile" className="nav-link">
              <i className="fa-solid fa-building-columns"></i> View Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/editprofile" className="nav-link">
              <i className="fa-solid fa-pen-to-square"></i> Edit Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/mangestudents" className="nav-link">
              <i className="fa-solid fa-address-card"></i> Manage Students
            </NavLink>
          </li>
          <li>
            <NavLink to="/mangecourses" className="nav-link">
              <i className="fa-solid fa-graduation-cap"></i> Manage Courses
            </NavLink>
          </li>
          <li>
            <NavLink to="/voucher" className="nav-link">
              <i className="fa-solid fa-ticket"></i> Buy Voucher
            </NavLink>
          </li>
        </ul>
      </div>

      <button className="logout-button">
        <i className="fa-solid fa-right-from-bracket"></i> Logout
      </button>
    </div>
  );
}

export default Dashboard;
