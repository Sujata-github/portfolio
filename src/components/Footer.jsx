import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  useEffect(() => {
    window.scrollTo(0, 0) // Scroll to top of the page on every render
  }, [])

  return (
    <div className=' bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white md:py-10 py-5 pt-8 overflow-x-hidden px-6 md:px-16'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-left pb-6 md:pb-10'>
        <div className='md:col-span-2 md:space-y-20 space-y-10'>
          {/* About Me Section */}
          <div className='order-1 '>
            <h6 className='text-purple-500 text-lg font-semibold'>About Me</h6>
            <p className='text-gray-400 text-sm mt-2 max-w-prose'>
              I am a passionate web developer with experience in creating
              dynamic and responsive websites. Let's connect and build something
              amazing together.
            </p>
          </div>
          {/* Contact Section */}
          <div className='order-3 '>
            <h6 className='text-purple-500 text-lg font-semibold'>Contact</h6>
            <ul className='mt-2 space-y-2'>
              <li className='text-gray-400 text-sm'>
                sujatanpowar1213@gmail.com
              </li>
              <li className='text-gray-400 text-sm'>+91 7058809195</li>
            </ul>
          </div>
        </div>
        {/* Quick Links Section */}
        <div className='order-3 '>
          <h6 className='text-purple-500 text-lg font-semibold'>Quick Links</h6>
          <ul className='mt-2 space-y-2'>
            <li>
              <Link
                to='/'
                className='text-gray-400 text-sm hover:text-white transition'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/about'
                className='text-gray-400 text-sm hover:text-white transition'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to='/projects'
                className='text-gray-400 text-sm hover:text-white transition'
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to='/experience'
                className='text-gray-400 text-sm hover:text-white transition'
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to='/contact'
                className='text-gray-400 text-sm hover:text-white transition'
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className='border-t border-gray-700 my-6'></div>

      {/* Copyright Section */}
      <div className='text-center text-gray-500 text-xs mt-4'>
        &copy; 2025 Sujata Powar. All Rights Reserved.
      </div>
    </div>
  )
}

export default Footer
