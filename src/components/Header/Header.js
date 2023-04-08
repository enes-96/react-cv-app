import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <header className="header">
      <h1>CV Generator</h1>
      <a
        href="https://github.com/enes-96/react-cv-app"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <FontAwesomeIcon icon={faGithub} className="github-icon" />
      </a>
    </header>
  );
}
