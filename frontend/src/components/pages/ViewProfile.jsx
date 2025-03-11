import React from "react";
import Dashbord from "./Dashbord";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/ViewProfile.css"; // Import custom styles

function ViewProfile() {
  const institution = {
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
    <div className="d-flex">
      <Dashbord />

      <div className="container mt-5  col-lg-8 col-md-6 col-sm-4 position-absolute end-0 me-5">
        <div className="card profile-card shadow-lg">
          <div className="card-body">
            <div className="text-center">
              <img
                src={institution.profileImage}
                alt="Profile"
                className="profile-img"
              />
              <h4 className="mt-3 text-primary fw-bold">
                {institution.institutionName}
              </h4>
              <p className="text-muted">{institution.description}</p>
              <button className="btn btn-outline-primary btn-sm mt-2">
                Edit Profile
              </button>
            </div>

            <hr />

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
  );
}

export default ViewProfile;
