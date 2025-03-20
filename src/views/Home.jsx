import React from 'react'
import Header from '../components/Header'
import { useState } from 'react'
import Summary from '../components/Summary'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'
import { changeHandler } from '../functions/ResumeFunctions'
import csLogo from '../assets/DeptLogos_CareerServ.jpg'
import Projects from '../components/Projects'
const Home = () => {
    const [getClick, setClick] = useState({
        header: false,
        summary: false,
        skills: false,
        workExperience: false,
        projects: false
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

        </div>
    )
}

export default Home