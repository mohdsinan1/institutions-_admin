import React, { useState } from "react";
import Dashbord from "./Dashbord";

function MangeStudents() {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    dob: "",
    email: "",
    mobile: "",
    qualification: "",
    address: "",
    district: "",
    state: "",
    pin: "",
    course: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted", formData);
  };

  return (
    <>
      <div className="d-flex ">
        <div>
          <Dashbord />
        </div>

        <div className="p-5  col-lg-8 col-md-6 col-sm-4 position-absolute end-0 me-5 ">
          <div className="container-fluid mt-3">
            <div className="card shadow p-3">
              <h4 className="text-center mb-5 ">Student Registration</h4>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Gender</label>
                    <select
                      className="form-select form-select-sm"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Date of Birth</label>
                    <input
                      type="date"
                      className="form-control form-control-sm"
                      name="dob"
                      value={formData.dob}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control form-control-sm"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Mobile</label>
                    <input
                      type="tel"
                      className="form-control form-control-sm"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Qualification</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      name="qualification"
                      value={formData.qualification}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-12">
                    <label className="form-label">Address</label>
                    <textarea
                      className="form-control form-control-sm"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      rows="2"
                    ></textarea>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">District</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      name="district"
                      value={formData.district}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">State</label>
                    <select
                      className="form-select form-select-sm"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select State</option>
                      <option value="State 1">State 1</option>
                      <option value="State 2">State 2</option>
                      <option value="State 3">State 3</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">PIN</label>
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      name="pin"
                      value={formData.pin}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Course</label>
                    <select
                      className="form-select form-select-sm"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Course</option>
                      <option value="Course A">Course A</option>
                      <option value="Course B">Course B</option>
                      <option value="Course C">Course C</option>
                    </select>
                  </div>

                  <div className="col-12 text-center mt-2">
                    <button
                      type="submit"
                      className="btn btn-primary btn-sm px-4"
                    >
                      Submit
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

export default MangeStudents;
