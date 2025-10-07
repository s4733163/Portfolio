import React from 'react'
import image from '../assets/IMG_2833.png'
import './Home.css'
import Navbar from './Navbar'
import pdf from '../assets/Resume_Varun.pdf'
import { useNavigate } from 'react-router-dom';


const Home = () => {
    let width = "300px"
    const navigate = useNavigate();


    const download = () => {
        const link = document.createElement("a");
        link.href = pdf; 
        link.download = "Varun_Singh_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }


    const click = () => {
        navigate('/project')
    }

    const take = () => {
        navigate('/contact')
    }

    return (
        <div className='home-wrapper'>
            <Navbar />
            <div className="intro">
                <div>
                    <h1>Varun Singh</h1>
                    <h2>Cybersecurity-Focused Full-Stack Developer</h2>
                    <p>I’m a Master of Information Technology student at the University of Tasmania with a strong interest in full-stack development and cybersecurity. With experience across software engineering, web application design, and secure system development, I enjoy solving complex problems through clean code and practical solutions. I'm someone who thrives on learning new technologies, building real-world projects, and continuously improving my technical and professional skills.</p>
                </div>
                <img src={image} alt="Varun Singh" width={width} />
            </div>
            <div>
                <p>🚀 Currently seeking web development summer internship opportunities to apply my skills in real-world projects and contribute to innovative teams.</p>
            </div>
            <div className='buttons'>
                <button className='download' onClick = {download}>
                    <i className="bi bi-download me-2"></i>
                    Download Resume
                </button>
                <button className='view_projects' onClick = {click} >
                    <i className="bi bi-box-arrow-up-right me-2"></i>
                    View Projects
                </button>
            </div >
            <div>
                <button className="collaborate" onClick={take}>
                    LET'S COLLABORATE
                </button>
            </div>
        </div>
    )
}

export default Home
