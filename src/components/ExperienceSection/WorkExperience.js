import React, { useState } from "react";
import "./WorkExperience.css";

export default function WorkExperience() {
  const [workExperience, setWorkExperience] = useState([
    { dates: "", jobTitle: "", tasks: "" },
  ]);

  //this is for the button
  const addWorkExperience = () => {
    setWorkExperience([
      ...workExperience,
      { dates: "", jobTitle: "", tasks: "" },
    ]);
  };
  const removeWorkExperience = () => {
    const allExperiences = [...workExperience];
    allExperiences.pop();
    setWorkExperience(allExperiences);
    console.log(allExperiences);
  };

  const handleDatesChange = (event, index) => {
    const newWorkExperience = [...workExperience];
    newWorkExperience[index].dates = event.target.value;
    setWorkExperience(newWorkExperience);
  };

  const handleJobTitleChange = (event, index) => {
    const newWorkExperience = [...workExperience];
    newWorkExperience[index].jobTitle = event.target.value;
    setWorkExperience(newWorkExperience);
  };

  const handleTasksChange = (event, index) => {
    const newWorkExperience = [...workExperience];
    newWorkExperience[index].tasks = event.target.value;
    setWorkExperience(newWorkExperience);
  };
  const handleContextMenu = (e) => {
    e.preventDefault();
    if (workExperience.length > 1) {
      removeWorkExperience();
    }
  };
  return (
    <>
      <h2>Experience</h2>

      {workExperience.map((experience, index) => (
        <div
          key={index}
          className="work-experience"
          onDoubleClick={addWorkExperience}
          onContextMenu={handleContextMenu}
        >
          <div className="work-experience-dates">
            <input
              placeholder="2016 - 2023"
              className="date"
              type="text"
              value={experience.dates}
              onChange={(event) => handleDatesChange(event, index)}
            />
          </div>
          <div>
            <div className="work-experience-job-title">
              <input
                placeholder="Senior React Developer"
                className="job-title"
                type="text"
                value={experience.jobTitle}
                onChange={(event) => handleJobTitleChange(event, index)}
              />
            </div>
            <div className="work-experience-tasks">
              <textarea
                placeholder="Work experience"
                className="tasks"
                value={experience.tasks}
                onChange={(event) => handleTasksChange(event, index)}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
