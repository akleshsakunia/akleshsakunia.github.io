import "./../styles/main.scss";
import React from "react";
import SectionalData from "../shared/SectionalData";
import Markdown from "react-markdown";

export default (props) => {
  return (
    <>
      <div className="col-7 col-md-4 section">
        <SectionView data={SectionalData["WORK EXPERIENCE"]} />
        <SectionView data={SectionalData["EDUCATION"]} />
        <SectionView data={SectionalData["ACHIEVEMENTS"]} />
      </div>
      <div className="col-12 col-md-5 section">
        <SectionView data={SectionalData["PROJECTS"]} />
      </div>
    </>
  );
};

const SectionView = (props) => {
  const sectionElement = props.data;
  return (
    <>
      <h5 className="head-bar">{sectionElement.heading}</h5>
      {sectionElement.content.map((val, idx) => (
        <div key={idx}>
          {val.subHeading && <h6 className="subheading">{val.subHeading}</h6>}
          <ul>
            {val.innerContent.map((val, idx) => (
              <li key={idx}>
                <Markdown>{val}</Markdown>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
};
