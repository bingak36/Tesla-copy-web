import React from 'react';
import './Styles/Footer.scss';
import { 
  companyLogo, 
  companyData, 
  companyLegal, 
  companyMenu,
  customerCenterData 
} from '../Util/Footer';

const Footer = () => {
  return (
    <div className='inner footer'>
      <section className='company'>
        <div className='company-logo'>
          {companyLogo}
        </div>

        <ul className='company-data'>
          {companyData.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
        <ul className='company-Legal'>
          {companyLegal.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </section>

      <section className='menu'>
        {Object.entries(companyMenu).map(([key, data]) => {
          const listItems = Object.keys(data)
            .filter((prop) => prop.startsWith('items'))
            .map((prop) => data[prop]);

          return (
            <div key={key} className={key}>
              <h3 className='menu-title'>{data.title}</h3>
              <ul>
                {listItems.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </section>

      <section className='customer-center'>
        <div className='customer-title'>{customerCenterData.title}</div>
        <div className="company-number">{customerCenterData.number}</div>
        <div className="company-hour">{customerCenterData.hour}</div>
        <div className="company-notice">{customerCenterData.notice}</div>
        
        <div className="company-tark">
          {customerCenterData.tark}
        </div>
        
        <div className="company-icon">
          <img src={customerCenterData.tesla} alt="Tesla" />
          <img src={customerCenterData.X} alt="X" />
          <img src={customerCenterData.kakao} alt="Kakao" />
          <img src={customerCenterData.instar} alt="Instagram" />
          <img src={customerCenterData.youtube} alt="YouTube" />
        </div>
      </section>
    </div>
  );
};

export default Footer;