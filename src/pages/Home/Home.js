import React from 'react';
import './Home.css';

// import assets
import logo from '../../static/logos/loco-moco-large-removebg-preview.png';


export default function Home() {
  return (
    <div className='home-page'>

      <div className='col left'>
        <div className='col-content'>
          <img src={logo} className='hero-logo' alt='locomocosec logo'/>
        </div>
      </div>

      <div className='col right'>
        <div className='sizzle-box'>
          <div className='sizzle-title'>Loco Moco</div>
          <div className='sizzle-sub-title'>The Premier Product Security Conference in Hawaiʻi</div>
          <div className='sizzle-text'>
            <p>LocoMocoSec Will Return... Join us in Spring 2024!</p>
          </div>
        </div>

      </div>

    </div>

  );
}
