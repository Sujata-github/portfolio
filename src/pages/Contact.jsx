import React, { useEffect } from 'react'

import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md'
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs'

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0) // Scroll to top of the page on every render
  }, [])
  return (
    <div className='flex flex-col items-center justify-center bg-gray-900 sm:p-8 py-8 mt-5'>
      <div className='flex  items-center justify-center bg-gray-800 my-10 sm:p-8 p-4 w-full max-w-4xl rounded-lg'>
        <div className='text-center space-y-6 py-6'>
          {/* Title */}
          <h2 className='text-3xl font-bold text-purple-500'>Contact Me</h2>

          {/* Contact Information */}
          <div className='space-y-4'>
            <div className='flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0'>
              <div className='bg-gray-700 p-4 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out'>
                <div className='flex items-center justify-center space-x-2 text-white'>
                  <MdEmail className='h-5 w-5' />
                  <p>sujatanpowar1213@gmail.com</p>
                </div>
              </div>
              <div className='bg-gray-700 p-4 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out'>
                <div className='flex items-center space-x-2 text-white'>
                  <MdPhone className='h-5 w-5' />
                  <p>+91 7058809195</p>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className=' max-w-[280px] sm:max-w-[240px] mx-auto bg-gray-700  p-4 rounded-lg shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out'>
              <div className='flex items-center space-x-2 text-white'>
                <MdLocationOn className='h-5 w-5' />
                <p>Kolhapur, Maharashtra</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className='flex space-x-6 justify-center'>
            <BsGithub className='text-purple-600 text-2xl hover:text-white cursor-pointer' />
            <BsLinkedin
              className='text-purple-600 text-2xl hover:text-white cursor-pointer'
              onClick={() =>
                window.open('https://www.linkedin.com/in/sujata-powar')
              }
            />
            {/* <BsTwitter className='text-white text-3xl hover:text-purple-600 cursor-pointer' /> */}
          </div>

          {/* Footer Message */}
        </div>
      </div>
      <div className='mt-8'>
        <p className='text-purple-600 text-xl font-bold'>Thanks for Watching</p>
      </div>
    </div>
  )
}

export default ContactPage
