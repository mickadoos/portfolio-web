// 8.0 create the HeaderSocials component in the header folder
import React from 'react' // 8.1 import React and rafce to create default component
import {BsLinkedin} from 'react-icons/bs' // 8.3 (on 52:50 time on tutorial) install react icons: $ npm i react-icons --save, watch how to import the React icons and use it on anchor links
import {BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
    {/* // 8.2 add anchor links to social webs */}
        <a href='https://www.linkedin.com/in/yabel-rodriguez/' target="_blank" rel='noreferrer'><BsLinkedin/></a>
        <a href='https://github.com/mickadoos' target="_blank" rel='noreferrer'><BsGithub/></a>
    </div>
  )
}

export default HeaderSocials