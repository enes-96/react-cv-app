import React from "react";
import { useState } from "react";
import "./EducationSection.css";

export default function EducationSection() {
  const [education, setEducation] = useState([
    { dates: "", location: "", certification: "" },
    { dates: "", location: "", certification: "" },
  ]);

  //this is for the button
  const addEducationExperience = () => {
    setEducation([
      ...education,
      { dates: "", location: "", certification: "" },
    ]);
  };
  const removeEducationExperience = () => {
    const allExperiences = [...education];
    allExperiences.pop();
    setEducation(allExperiences);
    console.log(allExperiences);
  };

  const handleDatesChange = (event, index) => {
    const newWorkExperience = [...education];
    newWorkExperience[index].dates = event.target.value;
    setEducation(newWorkExperience);
  };

  const handleEducationTitleChange = (event, index) => {
    const newWorkExperience = [...education];
    newWorkExperience[index].jobTitle = event.target.value;
    setEducation(newWorkExperience);
  };

  const handleEducationChange = (event, index) => {
    const newWorkExperience = [...education];
    newWorkExperience[index].tasks = event.target.value;
    setEducation(newWorkExperience);
  };
  const handleContextMenu = (e) => {
    e.preventDefault();
    if (education.length > 1) {
      removeEducationExperience();
    }
  };
  return (
    <>
      <h2>Education</h2>
      {education.map((education, index) => (
        <div
          key={index}
          className="education-wrapper"
          onDoubleClick={addEducationExperience}
          onContextMenu={handleContextMenu}
        >
          <div className="education-dates">
            <input
              placeholder="2016 - 2023"
              className="education-date"
              type="text"
              value={education.dates}
              onChange={(event) => handleDatesChange(event, index)}
            />
          </div>
          <div>
            <div className="education-title">
              <input
                placeholder="Oxford University"
                className="location"
                type="text"
                value={education.location}
                onChange={(event) => handleEducationTitleChange(event, index)}
              />
            </div>
            <div className="work-experience-tasks">
              <textarea
                placeholder="Bachelor in CS"
                className="certification"
                value={education.certification}
                onChange={(event) => handleEducationChange(event, index)}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
