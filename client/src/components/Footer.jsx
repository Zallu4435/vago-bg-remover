import React from 'react'
import logo from '../assets/logo.svg'
import facebook_icon from '../assets/facebook_icon.svg'
import twitter_icon from '../assets/twitter_icon.svg'
import google_plus_icon from '../assets/google_plus_icon.svg'

const Footer = () => {
  return (
    <div className='flex items-center justify-between gap-4 px-4 lg:px-44 py-3'>
      <img width={150} src={logo}/>
      <p className='flex-1 border-1 border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @vago | All right reserved</p>
      <div className='flex gap-1'>
        <img src={facebook_icon} alt=''/>
        <img src={twitter_icon} alt=''/>
        <img src={google_plus_icon} alt=''/>
      </div>
    </div>
  )
}

export default Footer
