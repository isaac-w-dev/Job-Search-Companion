import React from 'react'
import { useNavigate } from 'react-router-dom'
import { handleButtonNavigate } from '../functions/ResumeFunctions'
import csLogo from '../assets/DeptLogos_CareerServ.jpg'
const Home = () => {
    const navigate = useNavigate()
    return (
        <div id='homepage'>
            <img src={csLogo} alt='Career Services Logo'></img>
            <br />
            <h1>What do you need help with?</h1>
            <button onClick={() => handleButtonNavigate(navigate, '/resume')}>Resume</button>
            <button>Cover Letter</button>
            <button>Networking</button>
            <button>Interviewing</button>
            <button>Thank You Note</button>
            <button>Professional Development</button>
        </div>
    )
}

export default Home