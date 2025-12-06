import React from 'react'
import Navbar from './Navbar'
import './Projects.css'
import Project from './Project'
import project from '../assets/Screenshot 2025-07-15 at 7.55.05 PM.png'
import project3 from '../assets/Screenshot 2025-12-06 at 12.00.46 PM.png'

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
            github=""
            livelink="https://tabletapuq.onrender.com/tabletap/" // leave blank if not deployed yet
          />
          <Project
            name="SmartRecipe"
            description="SmartRecipe instantly transforms the ingredients you have into personalised, nutritious, and easy-to-follow AI-crafted recipes.Simply enter your ingredients and enjoy smart cooking made effortless.Discover new dishes, elevate everyday meals, and cook with confidence."
            image={project3}
            techstack={["Django REST Framework", "PostgreSQL", "React", "Vite", "TailwindCSS", "Cloudinary", "LangChain", "Gemini API"]}
            github=""
            livelink="https://smart-recipe-kpak.vercel.app/"
          />
        </div>
      </div>
    </>
  )
}

export default Projects
