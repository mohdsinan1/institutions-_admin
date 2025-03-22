import React, { useEffect } from "react";
import Dashbord from "./Dashbord";
import "bootstrap/dist/css/bootstrap.min.css";

import "../style/ViewProfile.css"; // Import custom styles
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../../redux/features/institutionslice";

function ViewProfile() {
  const { institution, loading, error } = useSelector((state) => state.profile);

  console.log("insti", institution);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile());
  }, [dispatch]);

  const handleEditClick = () => {
    navigate("/editprofile");
  };

  console.log("insti", institution);

  if (loading === "pending") {
    return <div className="condainer-fluid">loading....</div>;
  }
  if (error) {
    return <div className="container-fluid text-danger">Error: {error}</div>;
  }

  return (
    <>
      <div className="profile-container">
      <div>
        <Dashbord />
      </div>
      {institution ? (
        <div className="profile-content">
          <div className="profile-card">
            <div className="profile-header">
              <div className="profile-img-container">
                <img
                  src={`http://localhost:8080/${institution?.logo?.replace(/\\/g, "/") || "default-logo.png"}`}
                  alt="Profile"
                  className="profile-img"
                />
              </div>

              <div className="profile-info">
                <h5>{institution.name}</h5>
              </div>

              <div className="edit-button">
                <button onClick={handleEditClick}>Edit Profile</button>
              </div>
            </div>

            <div className="profile-details">
              {[
                { label: "User ID", value: institution.id },
                { label: "Name", value: institution.name },
                { label: "Email", value: institution.email },
                { label: "Phone", value: institution.phone },
                {
                  label: "Website",
                  value: (
                    <a href={institution.website} target="_blank" rel="noopener noreferrer">
                      {institution.website}
                    </a>
                  ),
                },
                { label: "Address", value: institution.address },
              ].map((item, index) => (
                <div className="profile-item" key={index}>
                  <div className="profile-label">{item.label}</div>
                  <div className="profile-value">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="no-profile">No Profile Found</div>
      )}
    </div>
    </>
  );
}

export default ViewProfile;
