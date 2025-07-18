import React from 'react'

const Project = (props) => {
    return (
        <div className='project'>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <img src={props.image} alt="Image" />
            <div className="techstack">
                {props.techstack.map((element, index) => (
                    <div key={index} className="tech-pill">
                        {element}
                    </div>
                ))}
            </div>
            {props.github === "" ? <div></div> : <a href={props.github} target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github"></i>
            </a>}
            {props.livelink === "" ? <div></div> : <a href={props.livelink} target="_blank">
                Live_Link
            </a>}

        </div>
    )
}

export default Project
