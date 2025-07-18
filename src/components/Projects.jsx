import React from 'react'
import Navbar from './Navbar'
import './Projects.css'
import Project from './Project'
import project from '../assets/Screenshot 2025-07-15 at 7.55.05 PM.png'
import project1 from '../assets/Screenshot 2025-07-15 at 8.20.37 PM.png'
import project2 from '../assets/Screenshot 2025-07-15 at 8.36.31 PM.png'

const Projects = () => {
  let description="TableTap is my first full-stack project, fully developed by me. It's a restaurant ordering system with QR-based menus and vendor dashboards. Built with server-side rendering (SSR) for efficiency, and adaptable to use React.js and Django REST Framework for scalable deployment."

  return (
    <>
      <Navbar />
      <div className='about'>
        <h2>Projects</h2>
        <p>
          Below is a selection of my work that demonstrates my capabilities in building
          modern web applications and secure systems. Each project was developed with attention to detail, performance, and usability.
        </p>
        <br />
        <div className="projects">
          <Project
            name="TableTap"
            description={description}
            image={project} // replace with actual image path
            techstack={["Django", "HTML", "CSS", "JavaScript", "SQL ORM"]}
            github="https://github.com/s4733163/TableTapUq"
            livelink="https://tabletapuq.onrender.com/tabletap/" // leave blank if not deployed yet
          />
          <Project
            name="Valostats"
            description="Valostats is a hackathon-winning project from UQCS Hackathon 2024. It delivers predictive analytics and gameplay insights for Valorant players using machine learning and interactive visualizations. Built with Streamlit, Python, and JavaScript by a 6-member team, it won the People's Choice Award."
            image={project1} // import this above
            techstack={["Streamlit", "Python", "JavaScript", "Jupyter", "Machine Learning"]}
            github="https://github.com/XLeling727/Valostats"
            livelink="" // add if deployed later
          />
          <Project
            name="MindMuse"
            description="MindMuse is a full-stack platform for analyzing workplace mental health risks using uploaded HR data. It features interactive dashboards, REST APIs, and secure session management. Built with Django and PostgreSQL, this project focuses on organizational risk visibility. The repository is currently private but will be made public soon."
            image={project2} // import or require this at the top
            techstack={["Django", "PostgreSQL", "Bootstrap", "JavaScript", "REST API"]}
            github="" // leave empty or use "#" until it's public
            livelink="" // add link if deployed
          />
        </div>
      </div>
    </>
  )
}

export default Projects
