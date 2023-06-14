import React, { useState } from 'react';
import '../../Products.css';

const InformationForm = () => {
  const [gender, setGender] = useState('');
  const [citizenship, setCitizenship] = useState('');
  const [legalRestrictions, setLegalRestrictions] = useState('');
  const [graduatingClass, setGraduatingClass] = useState('');
  const [hubLocation, setHubLocation] = useState('');
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

  const handlehubLocationChange = (e) => {
    setHubLocation(e.target.value);
  }

  const handleDesiredPositionChange = (e) => {
    setDesiredPosition(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare the data as an array of objects
    const formData = [
      {
        label: 'Candidate First Name',
        value: e.target.elements.firstName.value,
      },
      {
        label: 'Gender',
        value: gender,
      },
      {
        label: 'Citizenship/Work status',
        value: citizenship,
      },
      {
        label: 'Any other legal restrictions',
        value: legalRestrictions,
      },
      {
        label: 'Last Name',
        value: e.target.elements.lastName.value,
      },
      {
        label: 'Graduating class',
        value: graduatingClass,
      },
      {
        label: 'College Attending',
        value: e.target.elements.collegeAttending.value,
      },
      {
        label: 'GPA',
        value: gpa,
      },
      {
        label: 'Preferred Location',
        value: hubLocation,
      },
      {
        label: 'Desired Position',
        value: desiredPosition,
      },
    ];

    // Convert the data to CSV format
    const csvData = formData.map((data) => `${data.label},${data.value}`).join('\n');

    // Create a Blob object from the CSV data
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8' });

    // Create a temporary URL for the Blob object
    const url = URL.createObjectURL(blob);

    // Create a download link
    const link = document.createElement('a');
    link.href = url;
    link.download = 'form_data.csv';

    // Programmatically click the link to start the download
    link.click();

    // Clean up the temporary URL
    URL.revokeObjectURL(url);
  };

  return (
    <html>
      <head>
        <link rel="stylesheet" type="text/css" href="./style.css" />
      </head>
      <body>
        <form onSubmit={handleSubmit}>
          <label>
            Candidate First Name:
            <input type="text" name="firstName" required />
          </label>

          <label>
            Gender:
            <select value={gender} onChange={handleGenderChange} required>
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </label>

          <label>
            Are you authorized to work in the United States?:
            <select value={citizenship} onChange={handleCitizenshipChange} required>
              <option value="">Select</option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </label>

          <label>
            Any other legal restrictions:
            <input type="text" name="legalRestrictions" value={legalRestrictions} onChange={handleLegalRestrictionsChange} required />
          </label>

          <label>
            Last Name:
            <input type="text" name="lastName" required />
          </label>

          <label>
            Graduating class:
            <select value={graduatingClass} onChange={handleGraduatingClassChange} required>
              <option value="">Select</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2025">2026</option>
            </select>
          </label>

          <label>
            College Attending:
            <input type="text" name="collegeAttending" required value={collegeAttending} onChange={handleCollegeAttendingChange} />
          </label>

          <label>
            GPA:
            <input type="text" name="gpa" required value={gpa} onChange={handleGPAChange} />
          </label>

          <label>
            Preferred Location:
            <select value={hubLocation} onChange={handlehubLocationChange} required>
              <option value="">Select</option>
              <option value="Pheonix">Atlanta</option>
              <option value="Pheonix">Dallas</option>
              <option value="Pheonix">Bloomington</option>
              <option value="Pheonix">Pheonix</option>
              <option value="RDC">RDC (UIUC Students Only)</option>
            </select>
          </label>

          <label>
            Desired Position:
            <input type="text" name="desiredPosition" value={desiredPosition} onChange={handleDesiredPositionChange} required />
          </label>
          
          <button type="submit">Submit</button>
        </form>
      </body>
    </html>
  );
};

export default InformationForm;
