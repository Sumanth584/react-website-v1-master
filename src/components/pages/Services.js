import React from 'react';
import './Services.css';

const FunFacts = () => {
  return (
    <div className="container">
      <h2>Fun Facts about the State Farm Internship</h2>
      <ul className="fun-facts-list">
        <li>
          <strong>Compensation Icon:</strong> Great pay
          <p>Earn a competitive paycheck for putting your ideas, talents, and energy to work.</p>
        </li>
        <li>
          <strong>Training Icon:</strong> Volunteering
          <p>Sign up for opportunities and join your peers in giving back to the community.</p>
        </li>
        <li>
          <strong>Time-off Icon:</strong> Solid benefits
          <p>Take advantage of the rewards from our benefits package while you’re here.</p>
        </li>
        <li>
          <strong>Work Life Icon:</strong> Collaborative teams
          <p>Jump right in and solve problems with professionals working in your field of study.</p>
        </li>
        <li>
          <strong>Health Icon:</strong> Casual dress code
          <p>You’ll have the flexibility to “dress for your day” – ranging from casual to business wear.</p>
        </li>
        <li>
          <strong>Tuition Icon:</strong> Welcoming environment
          <p>Bring your whole self to work in a safe and open setting – where being a good neighbor matters.</p>
        </li>
      </ul>
    </div>
  );
};

export default FunFacts;
