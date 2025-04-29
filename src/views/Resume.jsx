import React from 'react'
import { useState } from 'react'
import { changeHandler, handleButtonNavigate } from '../functions/ResumeFunctions'
import csLogo from '../assets/DeptLogos_CareerServ.jpg'
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
            {
                getClick.generalTips ?
                    <div className='component' id='general-tips'>
                        <p>
                            Most important tip: Always tailor your resume to each employer you apply to.
                            <br />
                            A few targeted applications have a much better chance of catching an employers attention, as opposed to a very general application and mass applying to jobs
                            <br />
                            Employers can tell when you just want a job, and don't care who with. By adding a few indications in your resume that it is personal to that company, you increase your chances significantly
                            <br />
                            Here's a few ways you can indicate to the company that you tailored it specifically to them:
                        </p>
                        <ul>
                            <li>Name your document after the company, position, your name, and the kind of document</li>
                            <li>Ex. Cover_Letter_Company_Position_YourName</li>
                            <li>Include the name of the company in your summary</li>
                            <li>Use as many key words from the job posting as possible</li>
                        </ul>
                        <p>Hiring managers only spend about 7 seconds looking at any given resume. With this in mind it is important to:</p>
                        <ul>
                            <li>Focus your resume solely on demonstrating traits and skills that directly transfer to the job you are applying</li>
                            <li>Keep your resume to a single page for entry-level positions</li>
                            <li>Order your resume from most important to least important for the employer to know</li>
                            <li>Format your resume so that it is easy to skim this means using spacing, bold fonts, and headings appropriately</li>
                        </ul>
                    </div>
                    :
                    <div></div>
            }
            <button name='formatting' onClick={(e) => changeHandler(e, setClick, getClick)}>Formatting</button>
            {
                getClick.formatting ?
                    <div className='component' id='formatting'>
                        <p>Avoid using templates. Many of them don't work well with resume scanning software.</p>
                        <p>Microsoft Word is pretty good for writing resumes.</p>
                        <p>Microsoft Copilot is excellent for helping you figure out how to do anything you might want with Word.</p>
                        <p>Avoid tables</p>
                        <p>Neutral colors</p>
                        <p>Avoid certain fonts Wingdings, Times New Roman, Comic Sans</p>
                        <p>Useable fonts: Helvetica, Arial, Calibri, Georgia, Tahoma, Verdana</p>
                        <p>Headings should be 11-16 pt</p>
                        <p>Body should be 9-12 pt</p>
                    </div>
                    :
                    <div></div>
            }
            <button name='header' onClick={(e) => changeHandler(e, setClick, getClick)}>Header</button>
            {
                getClick.header ?
                    <div className='component' id='header'>
                        <p>Use your name, city of residence, phone number, email, and relevant webpages (ex. Github or LinkedIn)</p>
                        <p>Email is appropriate for professional use</p>
                        <p>Try to keep these as condensed as possible, while still maintaining readability (2 lines or 3 at most)</p>
                        <p>Separate phone number with dashes or spaces for readability ex. (614) 555-5555</p>
                        <p>This will be the only part of your resume that will contain your name.</p>
                    </div>
                    :
                    <div></div>
            }
            <button name='summary' onClick={(e) => changeHandler(e, setClick, getClick)}>Summary</button>
            {
                getClick.summary ?
                    <div className='component' id='summary'>
                        <p>3-4 Sentences at most on what makes you qualified</p>
                        <p>This will be where you give the employer a preview of what to look for in your resume.</p>
                        <p>Avoid using your name or any kind of pronouns (I/Me/My/He/She/They etc.)</p>
                        <p>You can do this by leading with an  adjective and a noun to describe yourself (ex. Honors Computer Science Student,  Driven Software Developer, Detail-Oriented Nursing Aid)</p>
                        <p>This is a great place to find parts of your resume that match the job desccription to include</p>
                    </div>
                    :
                    <div></div>
            }
            <button name='skills' onClick={(e) => changeHandler(e, setClick, getClick)}>Skills</button>
            {
                getClick.skills ?
                    <div className='component' id='skills'>
                        <p>This is a great place to list skills that apply to you that are in the job description.</p>
                        <p>Split into two headers both technical skills and functional skills</p>
                        <p>Bonus if you keep similar technical skills grouped together ex. Programming Languages, Social Skills, Medical Knowledge</p>
                        <p>Make sure this is readable, either separate with '|' or bullets in multiple columns</p>
                        <p>Make sure the skills you list skills that are transferable to the job you are applying</p>
                    </div>
                    :
                    <div></div>
            }
            <button name='workExperience' onClick={(e) => changeHandler(e, setClick, getClick)}>Work Experience</button>
            {
                getClick.workExperience ?
                    <div className='component' id='work-experience'>
                        <p>Use concise bullets over long descriptions.</p>
                        <p>Solely focus on bullets that demonstrate skills that transfer to the job you are applying.</p>
                        <p>Even if you have a job not relevant to the job you are applying you can list bullets demonstrating soft skills learned in the environment ex. Working in a fast-paced environment.</p>
                        <p>If you are low on space, you can just list the job, company, and date of employment for jobs not relevant the job you're applying.</p>
                        <p>I recommend keeping your work history (other than bullets) to a single line.</p>
                        <p>Ex. *Job Position* | *Business* | *City*, *State*</p>
                    </div>
                    :
                    <div></div>
            }
            <button name='projects' onClick={(e) => changeHandler(e, setClick, getClick)}>Projects</button>
            {
                getClick.projects ?
                    <div className='component' id='projects'>
                        <p>Typically this is used for more technical degrees (Engineering Technology, IT, etc.), but if you have a project you think would apply, feel free to list them.</p>
                        <p>If you have links to your project, even better. (Ex. Github, LinkedIn, etc.)</p>
                        <p>This can be a way for you to demonstrate what you know, whether this is personal, work, or school projects.</p>
                        <p>Use bullets to keep it as concise as possible</p>
                        <p>Format for your project like: *Title of Project* | *Role* | *Link* (If you have one)</p>
                    </div>
                    :
                    <div></div>
            }
            <button name='education' onClick={(e) => changeHandler(e, setClick, getClick)}>Education</button>
            {
                getClick.education ?
                    <div className='component' id='education'>
                        <p>If you have enrolled in college, you can leave your High School off of your education</p>
                        <p>The only exception for this is if you were in a career tech program in high school</p>
                        <p>An entry should be similar to the following: [School] [Degree] [Major] [Expected Graduation Date]</p>
                        <p>If you have the space, it can help to list classes and relevant key skills you learned from them, preferably key skills listed in the job description</p>
                    </div>
                    :
                    <div></div>
            }
            <button onClick={() => handleButtonNavigate(navigate, '/')}>Back</button>
        </div>
    )
}

export default Resume