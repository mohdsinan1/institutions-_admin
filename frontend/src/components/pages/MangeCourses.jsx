  import React, { useState } from "react";
  import Dashbord from "./Dashbord";
  import "bootstrap/dist/css/bootstrap.min.css";
  import "../style/ManageCourses.css";

  function ManageCourses() {
    const [searchTerm, setSearchTerm] = useState("");
    
    const courses = [
      { title: "Financial Accounting Basics", duration: "3 Months", content: "Covers bookkeeping, ledger entries, balance sheets.", softwares: "QuickBooks, Xero, Tally" },
      { title: "Advanced Excel for Finance", duration: "2 Months", content: "Learn advanced Excel formulas, financial modeling, and pivot tables.", softwares: "Microsoft Excel" },
      { title: "Taxation & GST", duration: "4 Months", content: "Covers tax laws, GST filing, compliance, and return filing process.", softwares: "Tally, Cleartax"},
      { title: "Business Analytics with Python", duration: "5 Months", content: "Data analysis, visualization, and predictive modeling using Python.", softwares: "Python, Pandas, NumPy"},
      { title: "Investment Management", duration: "3 Months", content: "Learn stock market analysis, portfolio diversification, and risk management.", softwares: "Bloomberg Terminal, Excel" },
      { title: "Cost & Management Accounting", duration: "4 Months", content: "Covers cost control, budgeting, variance analysis.", softwares: "SAP, Tally"},
      { title: "Digital Marketing & SEO", duration: "3 Months", content: "Learn SEO, PPC, social media marketing, and content marketing.", softwares: "Google Analytics, SEMrush, Ahrefs"},
      { title: "Corporate Finance & Valuation", duration: "5 Months", content: "Covers financial statements, corporate financing strategies.", softwares: "Excel, Bloomberg"},
      { title: "International Trade & Forex", duration: "4 Months", content: "Understand global trade policies, forex markets, and risk hedging techniques.", softwares: "MetaTrader, Reuters" },
      { title: "Blockchain & Cryptocurrency", duration: "6 Months", content: "Explore blockchain technology, Bitcoin, Ethereum, and crypto regulations.", softwares: "Ethereum, Hyperledger" },
    ];

    // Filter courses based on search term
    const filteredCourses = courses.filter((course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <>
        <div className="d-flex">
          <div>
            <Dashbord />
          </div>

          <div className="container mt-4 col-lg-8 col-md-6 col-sm-4 position-absolute end-0 me-5">
            <h2 className="text-center mb-4 text-primary fw-bold">Manage Courses</h2>
            
            {/* Search Input */}
            <div className="mb-4">
              <input
                type="text"
                className="form-control"
                placeholder="Search for a course..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="row">
              {filteredCourses.map((course, index) => (
                <div key={index} className="col-lg-4 col-md-6 mb-4">
                  <div className="card shadow-lg course-card">
                    <div className={`card-header text-white ${course.bgColor}`}>
                      <h5 className="m-0">{course.title}</h5>
                    </div>
                    <div className="card-body">
                      <p className="text-muted"><strong>Duration:</strong> {course.duration}</p>
                      
                      <div className="mb-3">
                        <h6 className="fw-semibold">Course Content:</h6>
                        <p className="text-secondary">{course.content}</p>
                      </div>

                      <div>
                        <h6 className="fw-semibold">Softwares Used:</h6>
                        <p className="text-secondary">
                          {course.softwares.split(",").map((software, idx) => (
                            <span key={idx} className="badge  me-2">
                              {software.trim()}
                            </span>
                          ))}
                        </p>
                      </div>
                      
                      {/* Buttons */}
                      <div className="d-flex justify-content-between mt-3">
                        <button type="button" className="btn btn-outline-primary">View Details</button>
                        <button className="btn btn-outline-danger">Purchase</button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }

  export default ManageCourses;
