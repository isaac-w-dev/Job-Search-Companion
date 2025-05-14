import { React, useState } from 'react'
import { changeHandler } from '../../functions/ResumeFunctions'
const GeneralTips = (props) => {
  const [getCategories, setCategories] = useState({
    customization: false,
    skimmability: false,
    professionalism: false
  })
  const [getSubCategories, setSubCategories] = useState({
    nameJobTitle: false,
    keywords: false,
    reverseChronological: false
  })
  const { getClick } = props;
  const { setClick } = props;
  return (
    <div id='general-tips'>
      <h1 className='white-title'>General Tips</h1>
      <div className='component-content'>
        <div className='subcomponent'>
          <button className='subcomponent-button' name='customization' onClick={(e) => changeHandler(e, getCategories, setCategories)}>Customize Resume for Each Employer</button>
          {getCategories.customization ?
            <div>
              <h1>Use the company's name and the job title throughout your document</h1>
              <h1>Use keywords from the job posting</h1>
              <h1>Focus on how your background makes you qualified for the job</h1>
              <h1>A little bit of extra effort goes a long way</h1>
            </div>
            :
            <br />
          }
        </div>
        <div className='subcomponent'>
          <button className='subcomponent-button' name='skimmability' onClick={(e) => changeHandler(e, getCategories, setCategories)}>Make your resume as easy to skim as possible</button>
        </div>
        <div className='subcomponent'>
          <button className='subcomponent-button' name='professionalism' onClick={(e) => changeHandler(e, getCategories, setCategories)}>Keep your resume professional</button>
        </div>
      </div>
      <button name='generalTips' onClick={(e) => changeHandler(e, getClick, setClick)}>Collapse</button>
    </div>
  )
}

export default GeneralTips