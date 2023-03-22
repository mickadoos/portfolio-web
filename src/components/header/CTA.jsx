// 6.0 create CTS.jsx file on header folder and rafce and tab to create the component
// 6.0 import React
import React from 'react'
import CV from '../../assets/CV-Yabel-Rodriguez.pdf' // 6.2 import the CV file from the assets folder

function CTA() {
  return (
    <div className='cta'>
        {/* // 6.1 create anchor link to download the CV with download attribute, and make the href to the CV imported file  */}
        <a href={CV} download className='btn'>Download CV</a> 
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA