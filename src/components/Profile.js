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
              <img alt="Aklesh Sakunia" src="aklesh-cropped-min.jpg" />
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
          <div className="head-bar">work</div>
          <div>{CommonData.motto}</div>
        </p>
        <p>
          <div className="head-bar">contact info</div>
          <div>{CommonData.email}</div>
          <div>{CommonData.phoneNumber}</div>
          <div>{CommonData.location}</div>
        </p>
        <p>
          <div className="head-bar">skills</div>
          {CommonData.skills.map((skill) => (
            <span className="badge rounded-pill"> {skill} </span>
          ))}
        </p>
      </div>
    </div>
  );
};
