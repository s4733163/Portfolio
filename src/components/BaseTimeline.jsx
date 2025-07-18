import React from 'react';


const BaseTimeline = () => {
  return (
    <div className="education-section">
      <div className="education-item">
        <div className="edu-header">
          <h4>Bachelor of Computer Science</h4>
          <span className="edu-date">July 2022 – June 2025</span>
        </div>
        <p className="edu-university">University of Queensland <span className="edu-major">(Major: Cybersecurity)</span></p>
        <p className="edu-desc">
          Developed a strong foundation in programming, networks, and security. Participated in hackathons, team projects, and hands-on labs focused on practical problem-solving.
        </p>
      </div>

      <div className="education-item">
        <div className="edu-header">
          <h4>Master of Information Technology</h4>
          <span className="edu-date">July 2025 – Present</span>
        </div>
        <p className="edu-university">University of Tasmania <span className="edu-major">(Specialising in ML & Data Science)</span></p>
      </div>
    </div>
  );
};

export default BaseTimeline;
