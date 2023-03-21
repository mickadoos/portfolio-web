// 3.0 create all components folders with .jsx file and .css --- then on .jsx file type racfe, press tab and import the .css file 
import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/foto-grupo.JPG'
import HeaderSocials from './HeaderSocials'
 
const Header = () => {
  return (
    <header>
    <div className='container header__container'>
      <h5>Hi I'm</h5>
      <h1>Yabel Rodriguez</h1>
      <h5 className='text-light'>Full Stack Developer</h5>
      <CTA/>
      <HeaderSocials/>

      <div className='me'>
        <img src={ME}  alt="" />
      </div>

      <a href='#contact' className='scroll__down'>Scroll Down</a>
    </div>
    </header>
  )
}

export default Header