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
            <br />
            <button name='generalTips' onClick={(e) => changeHandler(e, setClick, getClick)}>General Tips</button>
            {getClick.generalTips ? <GeneralTips /> : <div></div>}
            <button name='formatting' onClick={(e) => changeHandler(e, setClick, getClick)}>Formatting</button>
            {getClick.formatting ? <Formatting /> : <div></div>}
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
            <button onClick={() => handleButtonNavigate(navigate, '/')}>Back</button>
        </div>
    )
}

export default Resume