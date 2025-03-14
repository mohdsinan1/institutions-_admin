import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Dashbord from "./Dashbord";
import "../style/EditProfile.css";

function EditProfile() {
  const location = useLocation();
  const navigate = useNavigate();

  // Get existing profile data or initialize a new one
  const existingProfile = location.state?.profile || {
    id: "",
    name: "",
    logo: "",
    address: "",
    website: "",
    email: "",
    phone: "",
    contactPerson: "",
    status: "Approved",
  };

  const [formData, setFormData] = useState(existingProfile);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Navigate back with updated data
    navigate("/viewprofile", { state: { profile: formData } });
  };

  return (
    <>
      <div className="d-flex">
        <div>
          <Dashbord />
        </div>
        <div className="p-5 col-lg-8 col-md-6 col-sm-4 position-absolute end-0 me-5">
          <div className="container-fluid mt-5">
            <div className="card shadow p-4">
              <h2 className="text-center mb-4">Edit Institution Details</h2>
              <form onSubmit={handleSubmit}>
                <div className="row">
                  {/* ID */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">ID</label>
                    <input
                      type="text"
                      className="form-control"
                      name="id"
                      value={formData.id}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Name */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Logo */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Logo</label>
                    <input
                      type="file"
                      className="form-control"
                      name="logo"
                      accept="image/*"
                      onChange={handleChange}
                    />
                  </div>

                  {/* Address */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Website */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Website</label>
                    <input
                      type="url"
                      className="form-control"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Email */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Phone</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Contact Person */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Contact Person</label>
                    <input
                      type="text"
                      className="form-control"
                      name="contactPerson"
                      value={formData.contactPerson}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  {/* Status */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Status</label>
                    <select
                      className="form-select"
                      name="status"
                      value={formData.status}
                      onChange={handleChange}
                    >
                      <option value="Approved">Approved</option>
                      <option value="Blocked">Blocked</option>
                    </select>
                  </div>

                  {/* Submit & Reset Buttons */}
                  <div className="col-12 text-center mt-4">
                    <button type="submit" className="btn btn-outline-primary mx-2">
                      Save Changes
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger mx-2"
                      onClick={() => navigate(-1)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditProfile;
