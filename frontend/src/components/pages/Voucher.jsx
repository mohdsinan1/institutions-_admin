import React, { useState } from "react";
import Dashbord from "./Dashbord";
function Voucher() {
  const [voucherRequests, setVoucherRequests] = useState([]);
  const [formData, setFormData] = useState({
    noOfVouchers: "",
    requestDate: new Date().toISOString().split("T")[0], // Default to today's date
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setVoucherRequests([...voucherRequests, formData]);
    setFormData({
      noOfVouchers: "",
      requestDate: new Date().toISOString().split("T")[0],
    }); // Reset form
  };

  return (
    
      <div
        className="d-flex
    "
      >
        <div>
          <Dashbord />
        </div>
        <div className="container mt-5 col-lg-8 col-md-6 col-sm-4 position-absolute end-0 me-5">
          <div className="card shadow p-4">
            <h2 className="text-center mb-4">Buy Voucher</h2>

            {/* Form to Request Vouchers */}
            <form onSubmit={handleSubmit} className="mb-4">
              <div className="mb-3">
                <label className="form-label">Number of Vouchers</label>
                <input
                  type="number"
                  name="noOfVouchers"
                  className="form-control"
                  value={formData.noOfVouchers}
                  onChange={handleChange}
                  required
                  min="1"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Request Date</label>
                <input
                  type="date"
                  name="requestDate"
                  className="form-control"
                  value={formData.requestDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Request Voucher
              </button>
            </form>

            {/* Table to Show Requested Vouchers */}
            {voucherRequests.length > 0 && (
              <div>
                <h4 className="mb-3">Voucher Requests</h4>
                <table className="table table-bordered">
                  <thead className="table-dark">
                    <tr>
                      <th>#</th>
                      <th>Number of Vouchers</th>
                      <th>Request Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {voucherRequests.map((request, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{request.noOfVouchers}</td>
                        <td>{request.requestDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
 
  );
}

export default Voucher;
