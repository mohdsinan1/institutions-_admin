import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Dashbord from "./Dashbord";
import "../style/EditProfile.css";
import { useDispatch, useSelector } from "react-redux";
import { updateinstitution } from "../../../redux/features/institutionslice";

 function EditProfile () {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { institution } = useSelector((state) => state.profile);
  console.log("_id",institution._id);

  const profileid = institution._id;
  // Get existing profile data or initialize a new one
  const [newprofile, setNewProfile] = useState({
      id: "",
      name: "",
      address: "",
      website: "",
      email: "",
      phone: "",
      contactPerson: "",
      status: "pending",
    });

    const [logo,setLogo] = useState(null)
const handleChange = (e) =>{
  const {name ,value} = e.target;
  setNewProfile((prev) =>{
    return {...prev,[name]:value}
  })

}
const handlefileChange = (e) =>{
  
  setNewProfile((prev) =>{
    return {...prev,logo:e.target.files[0]}
  })

}
 

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newformDateToSent = new FormData();

    Object.keys(newprofile).forEach((key) => {
      newformDateToSent.append(key, newprofile[key]);
    });

    if (logo) {
      newformDateToSent.append("logo", logo);
    }

    await dispatch(updateinstitution({profileid,formData:newformDateToSent }));
    navigate("/viewprofile");
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
                      value={newprofile.id}
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
                      value={newprofile.name}
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
                      onChange={handlefileChange}
                    />
                  </div>

                  {/* Address */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Address</label>
                    <input
                      type="text"
                      className="form-control"
                      name="address"
                      value={newprofile.address}
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
                      value={newprofile.website}
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
                      value={newprofile.email}
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
                      value={newprofile.phone}
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
                      value={newprofile.contactPerson}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  

                  {/* Submit & Reset Buttons */}
                  <div className="col-12 text-center mt-4">
                    <button
                      type="submit"
                      className="btn btn-outline-primary mx-2"
                    >
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
