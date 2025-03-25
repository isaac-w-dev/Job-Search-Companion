import React from 'react'
import Header from '../components/Resume/Header'
import { useState } from 'react'
import Summary from '../components/Resume/Summary'
import Skills from '../components/Resume/Skills'
import WorkExperience from '../components/Resume/WorkExperience'
import { changeHandler } from '../functions/ResumeFunctions'
import csLogo from '../assets/DeptLogos_CareerServ.jpg'
import Projects from '../components/Resume/Projects'
import Education from '../components/Resume/Education'
const Resume = () => {
    const [getClick, setClick] = useState({
        header: false,
        summary: false,
        skills: false,
        workExperience: false,
        projects: false,
        education: false
    })
    // useEffect(() => {

    // })
    return (
        <div className='main'>
            <img src={csLogo} alt='Career Services Logo'></img>
            <br/>
            <button name='header' onClick={(e) => changeHandler(e, setClick, getClick)}>Header</button>
            {getClick.header ? <Header /> : <div></div>}
            <button name='summary' onClick={(e) => changeHandler(e, setClick, getClick)}>Summary</button>
            {getClick.summary ? <Summary /> : <div></div>}
            <button name='skills' onClick={(e) => changeHandler(e, setClick, getClick)}>Skills</button>
            {getClick.skills ? <Skills /> : <div></div>}
            <button name='workExperience' onClick={(e) => changeHandler(e, setClick, getClick)}>Work Experience</button>
            {getClick.workExperience ? <WorkExperience /> : <div></div>}
            <button name='projects' onClick={(e) => changeHandler(e, setClick, getClick)}>Projects</button>
            {getClick.projects ? <Projects /> : <div></div>}
            <button name='education' onClick={(e) => changeHandler(e, setClick, getClick)}>Education</button>
            {getClick.education ? <Education /> : <div></div>}

        </div>
    )
}

export default Resume