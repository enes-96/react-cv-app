import React, { useState } from "react";
import "./actionguide.css";

export default function ActionGuide() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div
      className="action-guide-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="action-guide-icon">?</div>
      {isHovering && (
        <div className="action-guide-modal">
          <p>Right click : Delete</p>
          <p>Left Double click : Add</p>
        </div>
      )}
    </div>
  );
}
