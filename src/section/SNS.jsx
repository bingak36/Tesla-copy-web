import React from 'react'
import './Styles/SNS.scss'
import { snsText, snsData, snsLogo } from '../Util/SNS'


const SNS = () => {

  return (
    <div className='inner sns'>
      <div className='logo'>
        <img src={snsLogo.src} alt={snsLogo.alt} />
      </div>

      <div className='sns-wrap'>
      
      <div className='sns-text'>
        <span className='text-1'>{snsText.text1}</span>
        <span className='text-2'>{snsText.text2}</span>
      </div>
        <ul>

          {snsData.map((sns)=>(
          <li>
            <a href={sns.href}>
              <img src={sns.src} alt={sns.alt} />
            </a>
          </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default SNS