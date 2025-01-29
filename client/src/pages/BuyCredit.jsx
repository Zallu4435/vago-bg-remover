import React from 'react'
import { plans } from '../assets/assets' 
import logo_icon from '../assets/logo_icon.svg'

const BuyCredit = () => {
  return (
    <div className='min-h-[80vh] text-center pt-14 mb-10'>
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-500 to-gray-400 bg-clip-text text-transparent'>Chose the plan that's right for you</h1>
      <div className='flex flex-wrap justify-center gap-6 text-left'>
        {plans?.map((item, index) => (
          <div key={index}
          className='bbg-white drop-shadow-sm border rounded-lg p-12 px-8 text-gray-700 hover:scale-105 transition-all duration-500'
          >
            <img width={40} src={logo_icon} alt='' />
            <p className='mt-3 font-semibold'>{item.id}</p>
            <p className='text-sm'>{item.desc}</p>
            <p className='mt-6'>
              <span className='text-3xl font-medium'>{item.price}</span>/ {item.credits} credits
            </p>
            <button className='w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52'>Purchase</button>
          </div>
        ))}
      </div>
      
    </div>
  )
}

export default BuyCredit
