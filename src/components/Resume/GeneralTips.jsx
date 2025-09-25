import { React, useState } from 'react'
import { changeHandler } from '../../functions/ResumeFunctions'
const GeneralTips = (props) => {
  return (
    <div className='side-bar' id="general-tips">
      <h1>General Tips</h1>
        <h2>Tailor your resume to each company and position</h2>
        <h3>Look for keywords to include in your resume<br/>
        Some examples of keywords are:</h3>
        <ul>
          <li>Qualifications</li>
          <li>Preferred but not required</li>
          <li>Any descriptive words the company uses to describe the ideal employee in the job description or their hiring page.</li>
          <li>Ex. Looking to hire a <b>self-starter</b> with a background in <b>Computer Science</b></li>
          <li>You can move your resume sections around to make sure the employer sees the most relevant parts first.</li>
        </ul>
        <h3>Name your resume after the company and position</h3>
        <h4>Example: Resume_Electrician_AEP_JohnDoe</h4>
        <h2>Sound professional when writing your resume</h2>
        <h3><b>Proofread! Proofread! Proofread!</b></h3>
        <ul>
          <li>Many reviewers will throw out your resume if they spot a typo or grammar issue</li>
          <li>Having a second person look over your resume can make a huge difference</li>
          <li>Avoid using pronouns (I/Me/My/He/She/They/It) or your name throughout your resume</li>
        </ul>
        <h2>Hiring managers only spend about 7 seconds looking at any given resume so, make your resume as easy to skim as possible</h2>
        <ul>Keep your resume to a single page</ul>
        <ul>Use concise bullets in place of longer descriptions</ul>
    </div>
  )
}

export default GeneralTips