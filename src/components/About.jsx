import React, { useState, useRef } from 'react'
import Navbar from './Navbar'
import './About.css'
import BaseTimeline from './BaseTimeline'
import Skills from './Skills'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import WorkExperience from './WorkExperience'
import '@fortawesome/fontawesome-free/css/all.min.css';


const About = () => {
  const [animate, setAnimate] = useState(true)
  const [value, setValue] = useState(0)
  const totalSkills = 14
  const minWidth = -((totalSkills + 2) * 110)
  const maxWidth = 660

  // timeoutRef.current stores the timer
  const timeoutRef = useRef(null)

  // whenever the button is clicked we set the animation as false
  // setting the animation to false means there is no class animate and hence no effect
  // we clear the timer if one exists and then set or simply just set
  const handleClick = () => {
    setAnimate(false)

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      setAnimate(true)
    }, 4000)
  }

  const leftClick = () => {
    if (value < minWidth) {
      setValue(0)
    } else {
      setValue((prevValue) => prevValue - 110)
    }
    handleClick()
  }

  const rightClick = () => {
    if (value > maxWidth) {
      setValue(0)
    } else {
      setValue((prevValue) => prevValue + 110)
    }
    handleClick()
  }

  return (
    <>
      <Navbar />
      <div className='about1'>
        <h2 className='header2'>About me</h2>
        <p className='para2'>
          Hi, I'm Varun Singh — a Master of Information Technology student at the University of Tasmania, with a Bachelor's degree in Computer Science. I'm passionate about full-stack development and cybersecurity, and I enjoy building secure, scalable software solutions that solve real-world problems. My background blends academic knowledge with hands-on experience, allowing me to approach challenges with both technical skill and creative problem-solving.
        </p>

        <h4>Academic Background</h4>
        <div className="timeline-container">
          <BaseTimeline />
        </div>

        <h4>Skills</h4>
        <div className='tech'>
          <button
            type="button"
            className="nav-button nav-button-left"
            onClick={leftClick}
            aria-label="Previous skills"
          >
            <FaChevronLeft />
          </button>

          <div className="skills-wrapper">
            <Skills animate={animate} value={value} />
          </div>

          <button
            type="button"
            className="nav-button nav-button-right"
            onClick={rightClick}
            aria-label="Next skills"
          >
            <FaChevronRight />
          </button>
        </div>
        <h4 className='works'>Work Experience</h4>
        <WorkExperience />
        <h4 className="section-title">Achievements</h4>
        <div className="highlight-card fade-in">
          🏆 <strong>People's Choice Award – UQCS Hackathon 2024</strong>
          <p className="achievement-text">
            <strong>Valostats</strong> is a hackathon-winning project that delivers predictive analytics and gameplay insights for Valorant players using machine learning and interactive visualizations. Built using Streamlit, Python, and JavaScript by a 6-member team, it was voted <em>People’s Choice</em> at the UQ Computing Society Hackathon 2024.
          </p>
        </div>

        <h4 className="section-title">Goals</h4>
        <div className="highlight-card fade-in">
          I'm currently focused on deepening my knowledge in web development .
          <p className="achievement-text">
            My long-term goal is to contribute to building ethical and scalable tech that empowers users and protects their data.
          </p>
        </div>

      </div>
    </>
  )
}

export default About