import React, { useState } from 'react'
import Dashbord from './Dashbord'

function ViewProfile() {
    

    const institution = {
        id: "Kshiti123",
        name: "Kshiti Ghelani",
        email: "kshitighelani@gmail.com",
        phone: "123 456 7890",
        website: "https://institution-website.com",
        address: "Web Developer and Designer",
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
       <form className="">
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
      <button type="button" className="btn btn-primary btn-sm px-3">
        Edit Profile
      </button>
    </div>
  </div>

  {/* Profile Details */}
  <div className="row mt-4">
    <div className="col-md-12">
      <div className="profile-info">
        {[
          { label: "User ID", value: institution.id },
          { label: "Name", value: institution.name },
          { label: "Email", value: institution.email },
          { label: "Phone", value: institution.phone },
          { label: "Website", value: <a href={institution.website} className="text-primary text-decoration-none">{institution.website}</a> },
          { label: "Address", value: institution.address },
        ].map((item, index) => (
          <div className="row mb-3 py-2 border-bottom" key={index}>
            <div className="col-md-6 fw-semibold text-secondary">{item.label}</div>
            <div className="col-md-6">{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
</form>

      </div>
    </div>
      </div>
      
      
      </div>
    </>
    
  )
}

export default ViewProfile