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
            <div>
              {getSubCategories.keywords ?
                <div className='subcategory-item'>
                  <button className='subcategory-item-button' onClick={(e) => changeHandler(e, getSubCategories, setSubCategories)}>Include Keywords in Your Resume</button>
                </div>
                :
                <button className='subcategory-item-button' onClick={(e) => changeHandler(e, getSubCategories, setSubCategories)}>Include Keywords in Your Resume</button>
              }
              <button className='subcategory-item-button'>Include </button>
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