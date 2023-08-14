import "./../styles/main.scss";
import React from "react";
import CommonData from "../shared/CommonData";

export default () => {
  const getPdf = (single = true) => {
    const projectsCol = document.getElementById("projects");
    if (single) projectsCol.style.display = "none";
    window.print();
    if (single) projectsCol.style.display = "";
  };
  return (
    <div className="col-5 col-md-3 profile">
      <div className="hex-base">
        <div className="hex__shape">
          <div className="hex__shape">
            <div className="hex__shape">
              <img alt="Aklesh Sakunia" src="aklesh-1.jpg" />
            </div>
          </div>
        </div>
      </div>

      <div className="profile-content">
        <div>
          <h3 className="myname">{CommonData.name}</h3>
          <h6>{CommonData.designation}</h6>
        </div>
        <button
          onClick={() => getPdf(false)}
          className="no-print btn btn-secondary m-2"
        >
          Get full PDF
        </button>
        <button
          onClick={() => getPdf()}
          className="no-print btn btn-secondary m-2"
        >
          Get 1 page PDF
        </button>
        <div className="py-2">
          <h5 className="head-bar">Work</h5>
          <b>{CommonData.motto}</b>
        </div>
        <div className="py-2">
          <h5 className="head-bar">Skills</h5>
          {CommonData.skills.map((skill, idx) => (
            <span key={idx} className="badge rounded-pill">
              {skill}
            </span>
          ))}
        </div>
        <div className="py-2">
          <h5 className="head-bar">Contact Info</h5>
          <div>
            <b>{CommonData.email}</b>
          </div>
          <div>
            <b>{CommonData.phoneNumber}</b>
          </div>
          <div>
            <b>{CommonData.location}</b>
          </div>
        </div>
      </div>
    </div>
  );
};
