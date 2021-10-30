import "./../styles/main.scss";
import React from "react";
import CommonData from "../shared/CommonData";

export default () => {
  return (
    <>
      <article class="profile">
        <div class="profile-image">
          <img alt="Aklesh Sakunia" src="aklesh-cropped-min.jpg" />
        </div>
        <h2 class="profile-username">{CommonData.name}</h2>
        <small class="profile-user-handle">{CommonData.designation}</small>
        <div class="profile-actions">
          <button class="btn btn--primary">Follow</button>
          <button class="btn btn--icon">
            <i class="ph-export"></i>
          </button>
          <button class="btn btn--icon">
            <i class="ph-dots-three-outline-fill"></i>
          </button>
        </div>
        <div class="profile-links">
          <a href="#" class="link link--icon">
            <i class="ph-twitter-logo"></i>
          </a>
          <a href="#" class="link link--icon">
            <i class="ph-facebook-logo"></i>
          </a>
          <a href="#" class="link link--icon">
            <i class="ph-instagram-logo"></i>
          </a>
        </div>
      </article>
      {/* <div>
        

        <div>
          <h5>{CommonData.name}</h5>
          <h6>{CommonData.designation}</h6>
        </div>
        <div>
          <div>
            <span>work</span>
            {CommonData.motto}
          </div>
        </div>
        <div>
          <div>
            <span>email</span>
            {CommonData.email}
          </div>
          <div>
            <span>phone_enabled</span>
            {CommonData.phoneNumber}
          </div>
          <div>
            <span>location_on</span>
            {CommonData.location}
          </div>
        </div> 
      </div> */}
    </>
  );
};
