import React, { useState, useEffect } from "react";
import axios from "axios";
import Dashbord from "./Dashbord";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style/ManageCourses.css";

function ManageCourses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [courses, setCourses] = useState([]);
  const [newCourse, setNewCourse] = useState({
    title: "",
    duration: "",
    content: "",
    softwares: "",
  });
  const [showForm, setShowForm] = useState(false);

  // Fetch courses from backend
  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = () => {
    axios
      .get("http://localhost:8080/courses/course")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.error("Error fetching courses:", error);
      });
  };

  // Handle form input change
  const handleChange = (e) => {
    setNewCourse({ ...newCourse, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/courses/course", {
        ...newCourse,
        softwares: newCourse.softwares.split(",").map((s) => s.trim()), 
      })
      .then(() => {
        fetchCourses(); 
        setNewCourse({ title: "", duration: "", content: "", softwares: "" });
        setShowForm(false); 
      })
      .catch((error) => {
        console.error("Error adding course:", error);
      });
  };

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

          {/* Add Course Button */}
          <div className="mb-4 text-end">
            <button className="btn btn-success" onClick={() => setShowForm(!showForm)}>
              {showForm ? "Cancel" : "Add Course"}
            </button>
          </div>

          {/* Add Course Form */}
          {showForm && (
            <div className="card p-3 mb-4">
              <h5 className="text-center mb-3">Add New Course</h5>
              <form onSubmit={handleSubmit}>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Course Title"
                    name="title"
                    value={newCourse.title}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Duration "
                    name="duration"
                    value={newCourse.duration}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-2">
                  <textarea
                    className="form-control"
                    placeholder="Course Content"
                    name="content"
                    value={newCourse.content}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="mb-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Softwares Used"
                    name="softwares"
                    value={newCourse.softwares}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Submit
                </button>
              </form>
            </div>
          )}

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
                  <div className="card-body">
                    <h5>{course.title}</h5>
                    <p><strong>Duration:</strong> {course.duration}</p>
                    <p><strong>Content:</strong> {course.content}</p>
                    <p><strong>Softwares Used:</strong> {course.softwares.join(", ")}</p>

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
