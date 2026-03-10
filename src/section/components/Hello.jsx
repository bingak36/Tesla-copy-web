import React from 'react'
import './Styles/Hello.scss'
import { helloData } from '../../Util/Hello'


const Hello = () => {

  const media = helloData.media
  const text = helloData.text


  return (
    <div className='inner Hello'>
      <img src={media.src} alt={media.alt} />
      <ul className='hello-wrap'>
        <li>
          {text.text01}
        </li>
        <li>
          {text.text02}
        </li>
        <li>
          {text.text03} 
        </li>
        <li>
          {text.text04}
        </li>
      </ul>
      
    </div>
  )
}

export default Hello