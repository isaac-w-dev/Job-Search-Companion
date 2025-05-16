import { React, useState } from 'react'
import { changeHandler } from '../../functions/ResumeFunctions'
const GeneralTips = (props) => {
  const [getCategories, setCategories] = useState({
    customization: false,
    skimmability: false,
    professionalism: false
  })
  const [getSubCategories, setSubCategories] = useState({
    keywords: false,
    additional: false
  })
  const { getClick } = props;
  const { setClick } = props;
  return (
    <div className='category'>
      <button name='generalTips' onClick={(e) => changeHandler(e, getClick, setClick)}>General Tips</button>
      <div className='category-content'>
        <div className={getCategories.customization ? 'subcategory white' : 'subcategory'}>
          <button className='subcategory-button' name='customization' onClick={(e) => changeHandler(e, getCategories, setCategories)}>Customize Resume for Each Employer</button>
          {getCategories.customization ?
            <div className='subcategory-content'>
              {getSubCategories.keywords ?
                <div className='subcategory-item teal'>
                  <button name='keywords' className='subcategory-item-button' onClick={(e) => changeHandler(e, getSubCategories, setSubCategories)}>Include Keywords in Your Resume</button>
                  <div className='subcategory-item-content'>
                    <h1 className='white bullet'>Minimum Qualifications</h1>
                    <h1 className='white bullet'>Mindset</h1>
                    <h1 className='white bullet'>Preferred but not required</h1>
                    <h1 className='white bullet'>Values Stated on the company website</h1>
                    <h1 className='white bullet'>Include company name and job title</h1>
                    <h1 className='white bullet'>Name resume after company: ex. 	Resume_Company_Position_YourName</h1>
                  </div>
                </div>
                :
                <button name='keywords' className='subcategory-item-button' onClick={(e) => changeHandler(e, getSubCategories, setSubCategories)}>Include Keywords in Your Resume</button>
              }
              <button name='additional' onClick={(e) => changeHandler(e, getSubCategories, setSubCategories)}className='subcategory-item-button'>Additional Customization Tips</button>
            </div>
            :
            <br />
          }
        </div>
        <div className='subcategory'>
          <button className='subcategory-button' name='skimmability' onClick={(e) => changeHandler(e, getCategories, setCategories)}>Make your resume as easy to skim as possible</button>
        </div>
        <div className='subcategory'>
          <button className='subcategory-button' name='professionalism' onClick={(e) => changeHandler(e, getCategories, setCategories)}>Keep your resume professional</button>
        </div>
      </div>
    </div>
  )
}

export default GeneralTips