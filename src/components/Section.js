import "./../styles/main.scss";
import React from "react";
import SectionalData from "../shared/SectionalData";

export default (props) => {
  return (
    <>
      <div className="row">
        <div className="col-12 col-md-6">
          <SectionView data={SectionalData["WORK EXPERIENCE"]} />
          <SectionView data={SectionalData["EDUCATION"]} />
          <SectionView data={SectionalData["ACHIEVEMENTS"]} />
        </div>
        <div className="col-12 col-md-6">
          <SectionView data={SectionalData["PROJECTS"]} />
        </div>
      </div>
    </>
  );
};

const SectionView = (props) => {
  const sectionElement = props.data;
  return (
    <>
      <div className="head-bar">{sectionElement.heading}</div>
      {sectionElement.content.map((val, idx) => (
        <div key={idx}>
          {val.subHeading && <div>{val.subHeading}</div>}
          <ul>
            {val.innerContent.map((val, idx) => (
              <li key={idx}>{val}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};
