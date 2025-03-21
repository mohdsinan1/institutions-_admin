import React, { useEffect } from "react";
import Dashbord from "./Dashbord";
import "bootstrap/dist/css/bootstrap.min.css";

import "../style/ViewProfile.css"; // Import custom styles
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../../redux/features/institutionslice";

function ViewProfile() {
  const { institution, loading, error } = useSelector((state) => state.profile);
 
  console.log("insti",institution);
  
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
      <div
        className="d-flex
    "
      >
        <div>
          <Dashbord />
        </div>
        {institution ? (
          <div className=" container-fluid  ">
            <div className="container-fluid  mt-5 h-75">
              <div
                className="emp-profile bg-white p-5 shadow-lg rounded h-75
"
              >
                <div className="row align-items-center g-4 my-">
                  {/* Profile Image */}
                  <div className="col-md-4 text-center">
                    <div className="profile-img">
                      <img
                        src={`http://localhost:8089/${institution?.logo?.replace(/\\/g, "/") || "default-logo.png"}`}
                        alt="Profile"
                        className="rounded-circle border border-secondary"
                        width="120"
                        height="120"
                      />
                    </div>
                  </div>

                  {/* Institution Info */}
                  <div className="col-md-6">
                    <div className="profile-head">
                      <h5 className="fw-bold text-dark mb-1">
                        {institution.name}
                      </h5>
                    </div>
                  </div>

                  {/* Edit Button */}
                  <div className="col-md-2 text-end">
                    <button
                      onClick={handleEditClick}
                      type="button"
                      className="btn btn-primary btn-sm px-3"
                    >
                      Edit Profile
                    </button>
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
                        <a
                          href={institution.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-decoration-none text-primary"
                        >
                          {institution.website}
                        </a>
                      ),
                    },
                    { label: "Address", value: institution.address },
                  ].map((item, index) => (
                    <div
                      className="row align-items-center profile-item"
                      key={index}
                    >
                      <div className="col-md-4 fw-semibold text-secondary">
                        {item.label}
                      </div>
                      <div className="col-md-8">{item.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>No Profile Found</div>
        )}
      </div>
    </>
  );
}

export default ViewProfile;
