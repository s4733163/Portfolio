import React from 'react'

const WorkExperience = () => {
  return (
    <div className="container">
        <div className="experience-grid">
            <div className="experience-card">
                <div className="company-header">
                    <div className="company-info">
                        <h3>Hydrizon Pty Ltd</h3>
                        <div className="company-location">Sydney, Australia</div>
                    </div>
                    <div className="duration">Nov 2023 – Feb 2024</div>
                </div>
                
                <div className="role-title">Software Developer Intern</div>
                
                <div className="achievements">
                    <h4>Key Achievements</h4>
                    <ul>
                        <li>
                            Built a responsive website using WordPress, improving user engagement and mobile accessibility
                        </li>
                        <li>
                            Improved application performance by 15% through code optimization and database query enhancement
                        </li>
                        <li>
                            Strengthened security protocols using encryption and secure authentication methods
                        </li>
                        <li>
                            Collaborated with cross-functional teams to deliver projects on time and within scope
                        </li>
                    </ul>
                </div>
                
                <div className="tech-stack">
                    <span className="tech-tag">WordPress</span>
                    <span className="tech-tag">PHP</span>
                    <span className="tech-tag">JavaScript</span>
                    <span className="tech-tag">MySQL</span>
                    <span className="tech-tag">CSS/HTML</span>
                </div>
            </div>
            
            <div className="experience-card">
                <div className="company-header">
                    <div className="company-info">
                        <h3>App Gurus</h3>
                        <div className="company-location">Brisbane, Australia</div>
                    </div>
                    <div className="duration">Nov 2024 – Feb 2024</div>
                </div>
                
                <div className="role-title">Cyber Security Intern</div>
                
                <div className="achievements">
                    <h4>Key Achievements</h4>
                    <ul>
                        <li>
                            Conducted comprehensive security assessments using Burp Suite, Wireshark, and Nmap
                        </li>
                        <li>
                            Analyzed security logs and detected threats using SIEM tools and Splunk
                        </li>
                        <li>
                            Implemented AWS Security Services to ensure compliance and risk mitigation
                        </li>
                        <li>
                            Created detailed security reports and presented findings to senior management
                        </li>
                    </ul>
                </div>
                
                <div className="tech-stack">
                    <span className="tech-tag">Burp Suite</span>
                    <span className="tech-tag">Wireshark</span>
                    <span className="tech-tag">Splunk</span>
                    <span className="tech-tag">AWS Security</span>
                    <span className="tech-tag">SIEM</span>
                    <span className="tech-tag">Nmap</span>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default WorkExperience
