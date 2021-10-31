import "./../styles/main.scss";
import React from "react";
import CommonData from "../shared/CommonData";

export default () => {
  return (
    <div>
      <div class="hex-base">
        <div class="hex__shape">
          <div class="hex__shape">
            <div class="hex__shape">
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
        <p>
          <h5 className="head-bar">Work</h5>
          <b>{CommonData.motto}</b>
        </p>
        <p>
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
        </p>
        <p>
          <h5 className="head-bar">Skills</h5>
          {CommonData.skills.map((skill) => (
            <span className="badge rounded-pill"> {skill} </span>
          ))}
        </p>
      </div>
    </div>
  );
};
