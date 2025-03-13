import React from "react";
import Dashbord from "./Dashbord";
import "bootstrap/dist/css/bootstrap.min.css";

import "../style/ViewProfile.css"; // Import custom styles
import { useLocation, useNavigate } from "react-router-dom";

function ViewProfile() {

  const navigate = useNavigate()
  const handleEditClick =()=>{
    navigate('/editprofile',{state:{profile:institution}})
  }
  const location =useLocation()
  const institution =location.state?.profile || {
    id: "Kshiti123",
    name: "Kshiti Ghelani",
    email: "kshitighelani@gmail.com",
    phone: "123 456 7890",
    website: "https://institution-website.com",
    address: "123, Knowledge Street, Education City",
    institutionName: "Institution Name",
    description: "Leading in Education & Innovation",
    profileImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog",
  };

  return (
    <>
<div className='d-flex
    '>
      <div><Dashbord/></div>
      
      <div className=' container-fluid  '>

      <div className="container-fluid  mt-5 h-75">
      <div className="emp-profile bg-white p-5 shadow-lg rounded h-75
     ">
     
  <div className="row align-items-center g-4">
    {/* Profile Image */}
    <div className="col-md-4 text-center">
      <div className="profile-img">
        <img
          src={institution.profileImage}
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
        <h5 className="fw-bold text-dark mb-1">{institution.institutionName}</h5>
        <h6 className="text-muted">{institution.description}</h6>
      </div>
    </div>

    {/* Edit Button */}
    <div className="col-md-2 text-end">
      <button onClick={handleEditClick} type="button" className="btn btn-primary btn-sm px-3">
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
                <div className="row align-items-center profile-item" key={index}>
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
    </div>
    </>
  );
}

export default ViewProfile;
