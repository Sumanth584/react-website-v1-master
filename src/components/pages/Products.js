import React from 'react';
import '../../Products.css';
import { useState } from 'react'

const InformationForm = () => {
  const [gender, setGender] = useState('');
  const [citizenship, setCitizenship] = useState('');
  const [legalRestrictions, setLegalRestrictions] = useState('');
  const [graduatingClass, setGraduatingClass] = useState('');
  const [collegeAttending, setCollegeAttending] = useState('');
  const [gpa, setGPA] = useState('');
  const [desiredPosition, setDesiredPosition] = useState('');

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleCitizenshipChange = (e) => {
    setCitizenship(e.target.value);
  };

  const handleLegalRestrictionsChange = (e) => {
    setLegalRestrictions(e.target.value);
  };

  const handleGraduatingClassChange = (e) => {
    setGraduatingClass(e.target.value);
  };

  const handleCollegeAttendingChange = (e) => {
    setCollegeAttending(e.target.value);
  };

  const handleGPAChange = (e) => {
    setGPA(e.target.value);
  };

  const handleDesiredPositionChange = (e) => {
    setDesiredPosition(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission or data handling here
  };

  return (
    <html>
    <head>
    <link rel="stylesheet" type = "text/css" href="./style.css" />
    </head>
    <body>
    <form onSubmit={handleSubmit}>
      <label>
        Candidate First Name:
        <input type="text" required />
      </label>

      <label>
        Gender:
        <select value={gender} onChange={handleGenderChange} required>
          <option value="">Select an option</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </label>

      <label>
        Citizenship/Work status:
        <select value={citizenship} onChange={handleCitizenshipChange} required>
          <option value="">Select an option</option>
          <option value="Citizen">Citizen</option>
          <option value="Permanent Resident">Permanent Resident</option>
          <option value="Work Visa">Work Visa</option>
          {/* Add more options as needed */}
        </select>
      </label>

      <label>
        Any other legal restrictions:
        <select value={legalRestrictions} onChange={handleLegalRestrictionsChange} required>
          <option value="">Select an option</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </label>

      <label>
        Last Name:
        <input type="text" required />
      </label>

      <label>
        Graduating class:
        <select value={graduatingClass} onChange={handleGraduatingClassChange} required>
          <option value="">Select an option</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          {/* Add more options as needed */}
        </select>
      </label>

      <label>
        Resume Attachment:
        <input type="file" required />
      </label>

      <label>
        College Attending:
        <input type="text" required />
      </label>

      <label>
        GPA:
        <input type="number" step="0.01" value={gpa} onChange={handleGPAChange} required />
      </label>

      <label>
        Desired Position:
        <input type="text" value={desiredPosition} onChange={handleDesiredPositionChange} required />
      </label>

      <button type="submit">Submit</button>
    </form>
    </body>
    </html>
  );
};

export default InformationForm;


