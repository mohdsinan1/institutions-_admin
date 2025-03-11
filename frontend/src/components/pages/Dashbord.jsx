import React from 'react'
import { NavLink } from 'react-router-dom'
import "../pages/Pages.css"
function Dashbord() {
  return (
<>


<div class= " border-end d-flex flex-column align-items-center " style={{height:"100vh", width:'300px',backgroundColor:"#eaeaea"}}  >
      <div class=" header p-4 ">
        <h5 class="fs-3 m-auto " id="offcanvasRightLabel">Institute Admin</h5>
       
      </div>
      <div class="">
       <ul className='list-unstyled'>
<li><NavLink to={'/viewprofile'} className='nav-link'>        <div className='p-3 fw-bold fs-5 text-center my-1 ' style={{width:'300px'}}>View Profile</div></NavLink></li>
        <li><NavLink to={'/editprofile'} className='nav-link'>
        <div className='p-3 fw-bold fs-5 text-center my-1' style={{width:'300px'}}>Edit Profile</div>
          </NavLink></li>
        <li><NavLink to={'/mangestudents'} className='nav-link'><div className='p-3 fw-bold fs-5 text-center my-1' style={{width:'300px'}}>Manage Student</div></NavLink></li>

        <li><NavLink to={'/mangecourses'} className='nav-link'><div className='p-3 fw-bold fs-5 text-center my-1 ' style={{width:'300px'}}>Manage Courses</div></NavLink></li>
      <li><NavLink to={'/voucher'} className='nav-link'>  <div className='p-3 fw-bold fs-5 text-center my-1 ' style={{width:'300px'}}>Buy Voucher</div></NavLink></li>
       </ul>
      </div>
    </div>

</>
  )    
}

export default Dashbord