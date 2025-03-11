import React from 'react'
import Dashbord from './Dashbord'
function MangeCourses() {
const Course = {
    title:"Financial Accounting Basics" ,
    duration:"3 Months" ,
    content:"This course covers bookkeeping, ledger entries, balance sheets, and financial statements in detail." ,
    softwares:"QuickBooks, Xero, Tally, FreshBooks"
}

  return (
    <>
    <div className='d-flex
    '>
      <div><Dashbord/></div>
      
      <div><div className="container mt-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="card-title text-primary">{Course.title}</h2>
          <p className="text-muted">Duration: {Course.duration}</p>

          <div className="mb-3">
            <h5 className="fw-semibold">Course Content:</h5>
            <p className="text-secondary">{Course.content}</p>
          </div>

          <div>
            <h5 className="fw-semibold">Accounting Softwares Used:</h5>
            <p className="text-secondary">
              {Course.softwares.split(",").map((software, index) => (
                <span key={index} className="badge bg-secondary me-2">
                  {software.trim()}
                </span>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div></div>
      
      
      </div>
      </>
  )
}

export default MangeCourses