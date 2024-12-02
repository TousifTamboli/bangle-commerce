import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
    <div className='text-center text-2xl pt-10 border-t'>
      <Title text1={'CONTACT'} text2={"US"}/>
    </div>
      <div className='my-10 flex-col flex justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Operating address</p>
          <p className='text-gray-500'>Near More Jwellers, Chandan Nagar, Pune - 411014</p>
          <p className='text-gray-500'>Tel: +91 - 7666839558 <br />Email: tousiftamboli3@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>Carrers at Forever</p>
          <p className='text-gray-500'>Learn More About us</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore More</button>

  
        </div>
      </div>
    </div>
  )
}

export default Contact
