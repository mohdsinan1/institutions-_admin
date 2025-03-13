import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../style/CreateProfile.css'

function CreateProfile() {
    const navigate= useNavigate()
    const [profile,setProfile] = useState({
        name: "",
    logo: null,
    address: "",
    website: "",
    email: "",
    phone: "",
    contactPerson: ""
    })
    
   

const createProfile=(e)=>{
e.preventDefault()
console.log(profile);

navigate('/viewprofile',{state:{profile}})

}




  return (
    <div>
       <div className="container mt-5">
    <div className="card shadow-lg p-4">
      <h2 className="text-center mb-4">Create Institution Profile</h2>
      <form onSubmit={createProfile} >
        <div className="row">
          {/* Name */}
          <div className="col-md-6">
            <div className="form-group fw-bold">
              <label className='mb-1'>Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={profile.name}
                onChange={(e)=>{setProfile({...profile,name:e.target.value})}}
                required
              />
            </div>
          </div>

          {/* Logo */}
          <div className="col-md-6 fw-bold">
            <div className="form-group">
              <label className='mb-1'>Logo</label>
              <input
                type="file"
                className="form-control"
                onChange={(e)=>{setProfile({...profile,logo:e.target.files})}}
                accept="image/*"
                required
              />
            </div>
          </div>

          {/* Address */}
          <div className="col-md-6 fw-bold">
            <div className="form-group">
              <label className='mb-1'>Address</label>
              <input
                type="text"
                className="form-control"
                name="address"
                value={profile.address}
                onChange={(e)=>{setProfile({...profile,address:e.target.value})}}
                required
              />
            </div>
          </div>

          {/* Website */}
          <div className="col-md-6 fw-bold">
            <div className="form-group">
              <label className='mb-1'>Website</label>
              <input
                type="url"
                className="form-control"
                name="website"
                value={profile.website}
                onChange={(e)=>{setProfile({...profile,website:e.target.value})}
                }
              />
            </div>
          </div>

          {/* Email */}
          <div className="col-md-6 fw-bold">
            <div className="form-group">
              <label className='mb-1'>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={profile.email}
                onChange={(e)=>{setProfile({...profile,email:e.target.value})}}
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div className="col-md-6 fw-bold">
            <div className="form-group">
              <label className='mb-1'>Phone</label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                value={profile.phone}
                onChange={(e)=>{setProfile({...profile,phone:e.target.value})}}
                required
              />
            </div>
          </div>

          {/* Contact Person */}
          <div className="col-md-6 fw-bold">
            <div className="form-group">
              <label className='mb-1'>Contact Person</label>
              <input
                type="text"
                className="form-control"
                name="contactPerson"
                value={profile.contactPerson}
                onChange={(e)=>setProfile({...profile,contactPerson:e.target.value})}
                required
              />
            </div>
          </div>

          

          {/* Submit Button */}
          <div className="col-md-12 text-center my-3">
            <button type="submit" className="btn btn-primary px-4 mx-3">
              Submit
            </button>
            <button type="submit" className="btn btn-primary px-4 mx-3 " onClick={()=>{navigate(-1)}}>
            Back
            </button>
          </div>
        </div>
      </form>
    </div>
  </div></div>
  )
}

export default CreateProfile