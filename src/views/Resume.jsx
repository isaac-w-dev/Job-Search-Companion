import React from 'react'
import Header from '../components/Resume/Header'
import { useState } from 'react'
import Summary from '../components/Resume/Summary'
import Skills from '../components/Resume/Skills'
import WorkExperience from '../components/Resume/WorkExperience'
import { changeHandler, handleButtonNavigate } from '../functions/ResumeFunctions'
import csLogo from '../assets/DeptLogos_CareerServ.jpg'
import Projects from '../components/Resume/Projects'
import Education from '../components/Resume/Education'
import GeneralTips from '../components/Resume/GeneralTips'
import Formatting from '../components/Resume/Formatting'
import { useNavigate } from 'react-router-dom'
const Resume = () => {
    const [getClick, setClick] = useState({
        header: false,
        summary: false,
        skills: false,
        workExperience: false,
        projects: false,
        education: false,
        generalTips: false,
        formatting: false
    })
    const navigate = useNavigate()
    return (
        <div className='main'>
            <img src={csLogo} alt='Career Services Logo'></img>
            {getClick.generalTips ? <GeneralTips getClick={getClick} setClick={setClick} /> : <button name='generalTips' className='teal' onClick={(e) => changeHandler(e, getClick, setClick)}>General Tips</button>}
            {getClick.formatting ? <Formatting /> : <button name='formatting' onClick={(e) => changeHandler(e, getClick, setClick)}>Formatting</button>}
            {getClick.header ? <Header /> : <button name='header' onClick={(e) => changeHandler(e, getClick, setClick)}>Header</button>}
            {getClick.summary ? <Summary /> : <button name='summary' onClick={(e) => changeHandler(e, getClick, setClick)}>Summary</button>}
            {getClick.skills ? <Skills /> : <button name='skills' onClick={(e) => changeHandler(e, getClick, setClick)}>Skills</button>}
            {getClick.workExperience ? <WorkExperience /> : <button name='workExperience' onClick={(e) => changeHandler(e, getClick, setClick)}>Work Experience</button>}
            {getClick.projects ? <Projects /> : <button name='projects' onClick={(e) => changeHandler(e, getClick, setClick)}>Projects</button>}
            {getClick.education ? <Education /> : <button name='education' onClick={(e) => changeHandler(e, getClick, setClick)}>Education</button>}
            <button onClick={() => handleButtonNavigate(navigate, '/')}>Back</button>
        </div>
    )
}

export default Resume