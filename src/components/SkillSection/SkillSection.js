import React from "react";
import { useState } from "react";
import "./SkillSection.css";

export default function SkillSection() {
  const [skills, setSkills] = useState([{ skillName: "", skillLevel: "" }]);

  //this is for the button
  const addSkill = () => {
    setSkills([...skills, { skillName: "", skillLevel: "" }]);
  };

  const removeSkill = () => {
    const allSkills = [...skills];
    allSkills.pop();
    setSkills(allSkills);
  };

  const handleSkillNameChange = (event, index) => {
    const newSkills = [...skills];
    newSkills[index].skillName = event.target.value;
    setSkills(newSkills);
  };

  const handleSkillLevelChange = (event, index) => {
    const newSkills = [...skills];
    newSkills[index].skillLevel = event.target.value;
    setSkills(newSkills);
  };

  const handleContextMenu = (e) => {
    e.preventDefault();
    if (skills.length > 1) {
      removeSkill();
    }
  };

  return (
    <>
      <h2>Skills</h2>
      {skills.map((skill, index) => (
        <div
          key={index}
          className="skill-wrapper"
          onDoubleClick={addSkill}
          onContextMenu={handleContextMenu}
        >
          <div className="skill-name">
            <input
              placeholder="Programming"
              className="skill-input"
              type="text"
              value={skill.skillName}
              onChange={(event) => handleSkillNameChange(event, index)}
            />
          </div>
          <div>
            <div className="skill-level">
              <input
                placeholder="Expert"
                className="skill-grade"
                type="text"
                value={skill.skillLevel}
                onChange={(event) => handleSkillLevelChange(event, index)}
              />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
