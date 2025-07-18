import React from 'react';
import {
    SiPython, SiC, SiHaskell, SiHtml5, SiCss3, SiJavascript,
    SiTailwindcss, SiReact, SiDjango, SiMysql,
    SiGit, SiLinux, SiWireshark
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const Skills = (props) => {
    const iconSize = 28;
    let value = props.value

    return (
        <div className='skills-section'>
            <div className={`all ${props.animate ? 'animate' : ''}`} style={{ transform: `translateX(${value}px)` }}>
                <div className='l-icons'>
                    <SiPython size={iconSize} color="#3776AB" />
                    <div>Python</div>
                </div>
                <div className='l-icons'>
                    <SiC size={iconSize} color="#A8B9CC" />
                    <div>C</div>
                </div>
                <div className='l-icons'>
                    <FaJava size={iconSize} color="#007396" />
                    <div>Java</div>
                </div>
                <div className='l-icons'>
                    <SiHaskell size={iconSize} color="#5D4F85" />
                    <div>Haskell</div>
                </div>
                <div className='l-icons'>
                    <SiHtml5 size={iconSize} color="#E34F26" />
                    <div>HTML</div>
                </div>
                <div className='l-icons'>
                    <SiCss3 size={iconSize} color="#1572B6" />
                    <div>CSS</div>
                </div>
                <div className='l-icons'>
                    <SiJavascript size={iconSize} color="#F7DF1E" />
                    <div>JavaScript</div>
                </div>
                <div className='l-icons'>
                    <SiTailwindcss size={iconSize} color="#38BDF8" />
                    <div>Tailwind CSS</div>
                </div>
                <div className='l-icons'>
                    <SiReact size={iconSize} color="#61DAFB" />
                    <div>React</div>
                </div>
                <div className='l-icons'>
                    <SiDjango size={iconSize} color="#092E20" />
                    <div>Django</div>
                </div>
                <div className='l-icons'>
                    <SiMysql size={iconSize} color="#4479A1" />
                    <div>SQL</div>
                </div>
                <div className='l-icons'>
                    <SiGit size={iconSize} color="#F05032" />
                    <div>Git</div>
                </div>
                <div className='l-icons'>
                    <SiLinux size={iconSize} color="#FCC624" />
                    <div>Linux</div>
                </div>
                <div className='l-icons'>
                    <SiWireshark size={iconSize} color="#1679A7" />
                    <div>Wireshark</div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
