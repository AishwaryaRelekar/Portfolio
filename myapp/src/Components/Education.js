import React from "react";
import img1 from "../img/w.jpg";

function Education() {
  return (
    <>
      <div className="container2" id="education">
        <h1>EDUCATION</h1>
        <div className="timeline" data-aos="fade-down" data-aos-duration="2000">
          <div className="container1 left-container">
            <img src={img1} alt="circle"></img>
            <h4>2017</h4>
            <div
              className="text-box"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <h3 className="text-light">High School</h3>
              <h5 className="fs-5">
                <i>KLE Society's English Medium School</i>
              </h5>{" "}
              <small>-2017</small>
              <p>
                {" "}
                <i className="fw-5">CBSE Board</i>, &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <strong>
                  <i>CGPA: 10</i>
                </strong>
              </p>
              <span class="left-container-arrow"></span>
            </div>
          </div>
          <div className="container1 right-container">
            <img src={img1} alt="circle"></img>
            <h4>2019</h4>
            <div
              className="text-box"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <h3 className="text-light">Pre-University</h3>
              <h5 className="fs-5">
                <i>Sukruti Pu Science College</i>
              </h5>
              <small>2018-2019</small>
              <p>
                <i className="fw-5">STATE Board</i>, &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <strong>
                  <i>Percentage: 81%</i>
                </strong>
              </p>
              <span class="right-container-arrow"></span>
            </div>
          </div>
          <div className="container1 left-container">
            <img src={img1} alt="circle"></img>
            <h4>2023</h4>
            <div
              className="text-box"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <h3 className="text-light">Bachelors Degree in CSE</h3>
              <h5 className="fs-5">
                <i>KLE Institute Of Technology</i>
              </h5>
              <small>2019-2023</small>
              <p>
                <i className="fw-5">VTU University</i>, &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                <strong>
                  <i>CGPA: 9.01</i>
                </strong>
              </p>
              <span class="left-container-arrow"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
