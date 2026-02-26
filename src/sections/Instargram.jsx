import React from 'react'
import Instar from '../util/Instargram'
import './style/Instargram.scss'


const Instagram = () => {
  return (
    <div className='inner-instar'>
      <div className='instar-text'>
        <h2>Instargram</h2>
        <p>@tocobo_official</p>
      </div>
      <div className="instar-wrap">
        <ul className="instar-img">
          <div className="instar-grid">
      {Instar.map((item) => (
        <a key={item.id} href={item.link} className="instar-item">
          <div className="image-wrapper">
            <img src={item.image} alt={item.alt} />
            <div className="overlay">
            </div>
          </div>
        </a>
      ))}
    </div>
        </ul>
      </div>
    </div>
  )
}

export default Instagram