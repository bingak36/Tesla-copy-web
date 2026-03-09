import React from 'react'
import { categories } from '../../Util/Cta'
import './styles/Cta.scss'

const Cta = () => {

  return (
    <div className='inner cta-inner'>
      <ul className="cta-list">
        {categories.map((c) => (
          <li key={c.id} >
            <div className='img-box'>
              <div className="img-wrap" style={{ backgroundImage: `url(${c.img.src})` }} />
            </div>
              <p>
                {c.name}
              </p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Cta