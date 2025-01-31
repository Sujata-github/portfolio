import React, { useEffect } from 'react'
import profile from './../assets/profile.jpg'
import { Link } from 'react-router-dom'
import resume from './../assets/my_resume.pdf'

const Home = () => {
  const openPDF = () => {
    window.open(resume)
  }
  useEffect(() => {
    window.scrollTo(0, 0) // Scroll to top of the page on every render
  }, [])
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4 sm:p-8 md:p-16 py-14'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl items-center '>
        {/* Left Section */}
        <div className='flex flex-col justify-center items-start space-y-6 p-4 order-2 md:order-1'>
          <h1 className='text-white text-xl md:text-xl'>
            Hey I'm <span className='text-purple-500'>Sujata Powar</span>
          </h1>
          <h2 className='text-white text-2xl md:text-2xl font-bold'>
            FrontEnd Developer & Web Designer
          </h2>
          <div className='w-full h-[1.5px] bg-purple-500 rounded-full'></div>

          <div className='space-y-4 text-gray-300 text-sm md:text-sm'>
            <p>
              I am a passionate Frontend Developer with a year of hands-on
              experience in crafting dynamic and user-centric web applications
              using React.js.
            </p>
            <p>
              My focus lies in transforming creative ideas into intuitive and
              responsive digital experiences. With a keen eye for detail and a
              drive for continuous learning, I strive to deliver clean,
              maintainable, and performance-optimized code.
            </p>
            <p>
              I'm excited to bring my energy, adaptability, and problem-solving
              mindset to collaborative projects that push boundaries in web
              development.
            </p>
          </div>

          {/* <div className='flex space-x-6 pt-4'>
            <button
              onClick={openPDF}
              className='bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-full transition-transform transform hover:scale-105 focus:outline-none'
            >
              Resume
            </button>

            <Link
              to='/projects'
              className='bg-purple-600 hover:bg-purple-700 text-white py-2 px-6 rounded-full transition-transform transform hover:scale-105 focus:outline-none'
            >
              Projects
            </Link>
          </div> */}
          <div className='flex sm:flex-row flex-col gap-4  space-x-6 pt-4 w-full items-center justify-center'>
            <button
              onClick={openPDF}
              className='sm:w-[50%] w-full bg-gradient-to-r  from-purple-400 to-purple-800 hover:from-purple-600 hover:to-purple-900 text-white py-2 sm:px-6 px-2 rounded-full transition-transform transform hover:scale-105 focus:outline-none'
            >
              Resume
            </button>

            <Link
              to='/projects'
              className='sm:w-[50%]  w-full  text-center bg-gradient-to-r from-blue-800 to-blue-950 hover:from-blue-700 hover:to-teal-700 text-white py-2 sm:px-6 px-2 rounded-full transition-transform transform hover:scale-105 focus:outline-none'
            >
              Projects
            </Link>
          </div>
        </div>

        {/* Right Section */}
        <div className='flex justify-center items-center relative order-1 md:order-2'>
          <img
            src={profile}
            alt='Profile Image'
            className='h-96 w-auto object-cover rounded-full shadow-lg border-violet-950 border-4'
            // className='h-96 w-auto object-cover rounded-full shadow-lg border-violet-950 border-4'
          />
          <div className='absolute top-4 left-9 w-16 h-16 bg-purple-500 opacity-50 blur-lg'></div>
          <div className='absolute bottom-2 right-14 w-20 h-20 bg-blue-500 opacity-50 blur-md'></div>
          <div className='absolute top-12 left-28 w-12 h-12 bg-pink-500 opacity-50 blur-sm'></div>
        </div>

        {/* <div className='perspective-container'>
          <div className='profile-card'>
            <div className='front'>
              <img
                src={profile}
                alt='Profile Image'
                className='h-96 w-auto object-cover rounded-full shadow-lg border-violet-950 border-4'
              />
            </div>
            <div className='back'>
              <div className='text-center text-white space-y-4 p-6'>
                <h2 className='text-2xl font-bold text-purple-500'>
                  Sujata Powar
                </h2>
                <p>Frontend Developer & Web Designer</p>
                <p>"Transforming ideas into digital experiences"</p>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className='relative'>
          <div className='absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-spin-slow'></div>
          <img
            src={profile}
            alt='Profile Image'
            className='h-96 w-auto object-cover rounded-full shadow-lg border-4 border-gray-900 relative'
          />
        </div> */}

        {/* <div className='glass-card'>
          <img
            src={profile}
            alt='Profile'
            className='rounded-full h-80 w-80 object-cover shadow-md'
          />
          <div className='absolute top-0 left-0 h-full w-full rounded-full backdrop-blur-lg bg-white/10 flex items-center justify-center text-white'>
            <h2 className='text-xl font-semibold'>Sujata Powar</h2>
          </div>
        </div> */}

        {/* <div className='relative flex items-center justify-center w-80 h-80 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-1 shadow-lg'>
          <div className='relative flex items-center justify-center w-full h-full rounded-full bg-white/10 backdrop-blur-lg'>
            <img
              src={profile}
              alt='Profile'
              className='rounded-full w-72 h-72 object-cover shadow-md'
            />
          </div>
        </div> */}

        {/* <div className="relative group">
  <img
    src={profile}
    alt="Profile"
    className="rounded-full h-96 w-auto object-cover transition-all duration-500 group-hover:grayscale-0 grayscale"
  />
</div> */}

        {/* <div className='relative w-80 h-80'>
          <img
            src={profile}
            alt='Profile'
            className='w-full h-full object-cover rounded-full shadow-lg'
          />
          <div className='absolute top-0 left-0 w-full h-full border-4 border-purple-500 rounded-full'></div>
          <div className='absolute top-2 left-2 w-[95%] h-[95%] border-4 border-blue-500 rounded-full'></div>
          <div className='absolute top-4 left-4 w-[90%] h-[90%] border-4 border-pink-500 rounded-full'></div>
        </div> */}
        {/* <div className='relative w-80 h-80'>
          <img
            src={profile}
            alt='Profile'
            className='w-full h-full object-cover rounded-full shadow-lg'
          />
          <div className='absolute top-2 left-2 w-20 h-20 bg-purple-500 rounded-full'></div>
          <div className='absolute bottom-4 right-4 w-16 h-16 bg-blue-500 rotate-45'></div>
          <div className='absolute top-12 left-24 w-12 h-12 bg-pink-500 transform rotate-45'></div>
        </div> */}

        {/* <div className='relative w-80 h-80'>
          <img
            src={profile}
            alt='Profile'
            className='w-full h-full object-cover rounded-full shadow-lg'
          />
          <div className='absolute top-2 left-10 w-4 h-4 bg-purple-500 rounded-full'></div>
          <div className='absolute bottom-4 right-8 w-6 h-6 bg-blue-500 rounded-full'></div>
          <div className='absolute top-16 right-16 w-3 h-3 bg-pink-500 rounded-full'></div>
          <div className='absolute top-10 left-0 w-16 h-1 bg-purple-500'></div>
          <div className='absolute bottom-10 right-4 w-20 h-1 bg-blue-500'></div>
        </div> */}
        {/* Lines */}
        {/* <div className='relative w-80 h-80 flex justify-center items-center ml-7'>
          <img
            src={profile}
            alt='Profile'
            className='w-full h-full object-cover rounded-full shadow-lg  border-violet-950 border-4'
          />
          <div className='absolute top-4 left-4 w-16 h-16 bg-purple-500 opacity-50 blur-lg'></div>
          <div className='absolute bottom-2 right-2 w-20 h-20 bg-blue-500 opacity-50 blur-md'></div>
          <div className='absolute top-12 left-20 w-12 h-12 bg-pink-500 opacity-50 blur-sm'></div>
        </div> */}
        {/* <div className="relative w-80 h-80">
  <img
    src={profile}
    alt="Profile"
    className="w-full h-full object-cover rounded-full shadow-lg"
  />
  <div className="absolute top-0 left-0 w-full h-full border-4 border-purple-500 rounded-full animate-spin-slow"></div>
  <div className="absolute top-2 left-2 w-[95%] h-[95%] border-4 border-blue-500 rounded-full animate-spin-reverse"></div>
</div> */}
      </div>
    </div>
  )
}

export default Home
