import React from 'react'
import './Styles/Introduction.scss'
import { introData } from '../Util/Introduction'

const Introduction = () => {

  const text = introData.text
  const img = introData.image

  return (
    <div className='inner intro'>
      <div className='wrapper'>
        <div className='text-wrap'>
          <div className='title'>
            {text.title}
          </div>
          <div className='text'>
            {text.text}
          </div>
          <button>{text.button}</button>
        </div>
        <div className='img-wrap'>
          <img src={img.src1} alt={img.alt}/>
          <img src={img.src2} alt={img.alt}/>
        </div>
      </div>
    </div>
  )
}

export default Introduction