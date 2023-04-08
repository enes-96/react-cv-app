import React, { useState } from "react";
import "./TopSection.css";

export default function TopSection() {
  const [name, setName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [summary, setSummary] = useState("");
  const [showCharacterCount, setShowCharacterCount] = useState(false);

  const handleNameChange = (event) => setName(event.target.value);
  const handleJobTitleChange = (event) => setJobTitle(event.target.value);
  const handleAddressChange = (event) => setAddress(event.target.value);
  const handlePhoneChange = (event) => setPhone(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleSummaryChange = (event) => {
    setSummary(event.target.value);
    setShowCharacterCount(true);
  };

  return (
    <div>
      <input
        placeholder="John Smith"
        className="name"
        type="text"
        value={name}
        onChange={handleNameChange}
      />
      <input
        placeholder="React Developer"
        className="job-title"
        type="text"
        value={jobTitle}
        onChange={handleJobTitleChange}
      />
      <div className="user-data">
        <div>
          <label htmlFor="address">Address:</label>
          <input
            id="address"
            placeholder="Portland, ME"
            className="address"
            type="text"
            value={address}
            onChange={handleAddressChange}
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            id="phone"
            placeholder="000 999 444"
            className="phone"
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
          />
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            placeholder="j.smith@business.com"
            className="email"
            type="email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
      </div>
      <div className="text-area-wrapper">
        <textarea
          id="summary"
          placeholder="I created a custom e-commerce website for a fashion client with seamless checkout, mobile responsiveness, and product filtering. Integrated APIs and a user-friendly CMS led to increased online sales and engagement."
          value={summary}
          onChange={handleSummaryChange}
          maxLength={465}
          onBlur={() => setShowCharacterCount(false)}
        />
        {showCharacterCount && (
          <p className="output-character">
            Characters remaining: {465 - summary.length}
          </p>
        )}
      </div>
    </div>
  );
}
