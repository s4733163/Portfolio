import React from 'react';
import {
  SiPython, SiC, SiHaskell, SiHtml5, SiCss3, SiJavascript,
  SiTailwindcss, SiReact, SiDjango, SiMysql,
  SiGit, SiLinux, SiWireshark
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';

const Skills = ({ animate, value }) => {
  const iconSize = 28;

  const iconStyles = {
    python: { color: '#3776AB' },
    c: { color: '#A8B9CC' },
    java: { color: '#b07219' },
    haskell: { color: '#5e5086' },
    html: { color: '#E34F26' },
    css: { color: '#1572B6' },
    js: { color: '#F7DF1E' },
    tailwind: { color: '#38BDF8' },
    react: { color: '#61DAFB' },
    django: { color: '#092E20' },
    sql: { color: '#00758F' },
    git: { color: '#F1502F' },
    linux: { color: '#FCC624' },
    wireshark: { color: '#006699' }
  };

  return (
    <div className='skills-section'>
      <div className={`all ${animate ? 'animate' : ''}`} style={{ transform: `translateX(${value}px)` }}>
        <div className='l-icons'><SiPython style={iconStyles.python} size={iconSize} /><div>Python</div></div>
        <div className='l-icons'><SiC style={iconStyles.c} size={iconSize} /><div>C</div></div>
        <div className='l-icons'><FaJava style={iconStyles.java} size={iconSize} /><div>Java</div></div>
        <div className='l-icons'><SiHaskell style={iconStyles.haskell} size={iconSize} /><div>Haskell</div></div>
        <div className='l-icons'><SiHtml5 style={iconStyles.html} size={iconSize} /><div>HTML</div></div>
        <div className='l-icons'><SiCss3 style={iconStyles.css} size={iconSize} /><div>CSS</div></div>
        <div className='l-icons'><SiJavascript style={iconStyles.js} size={iconSize} /><div>JavaScript</div></div>
        <div className='l-icons'><SiTailwindcss style={iconStyles.tailwind} size={iconSize} /><div>Tailwind CSS</div></div>
        <div className='l-icons'><SiReact style={iconStyles.react} size={iconSize} /><div>React</div></div>
        <div className='l-icons'><SiDjango style={iconStyles.django} size={iconSize} /><div>Django</div></div>
        <div className='l-icons'><SiMysql style={iconStyles.sql} size={iconSize} /><div>SQL</div></div>
        <div className='l-icons'><SiGit style={iconStyles.git} size={iconSize} /><div>Git</div></div>
        <div className='l-icons'><SiLinux style={iconStyles.linux} size={iconSize} /><div>Linux</div></div>
        <div className='l-icons'><SiWireshark style={iconStyles.wireshark} size={iconSize} /><div>Wireshark</div></div>
      </div>
    </div>
  );
};

export default Skills;
