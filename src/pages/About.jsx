import React, { useEffect } from 'react'
import html_logo from '../assets/html.png'
import css_logo from '../assets/css.png'
import js_logo from '../assets/js.png'
import react_logo from '../assets/react.png'
import reactnative_logo from '../assets/reactnative.png'
import tailwind from '../assets/tail1.png'
import { Link } from 'react-router-dom'
import { IoSchool } from 'react-icons/io5'

const About = () => {

  useEffect(() => {
    window.scrollTo(0, 0) // Scroll to top of the page on every render
  }, [])
  const skills = [
    { id: 1, title: 'Html', img: html_logo },
    { id: 2, title: 'Css', img: css_logo },
    { id: 3, title: 'Javascript', img: js_logo },
    { id: 4, title: 'React', img: react_logo },
    { id: 5, title: 'React Native', img: reactnative_logo },
    { id: 6, title: 'Tailwind Css', img: tailwind }
  ]

  const education = [
    {
      id: 1,
      title: 'Master of Computer Science',
      collegename: 'Chh.Shahu Institute of Business Research, Kolhapur',
      time: 'Full Time',
      year: '2021-2023'
    },
    {
      id: 2,
      title: 'Bachelor of Science - Computer Science',
      collegename: 'DoodhSakhar Mahavidyalaya, Bidri',
      time: 'Full Time',
      year: '2018-2021'
    },
    {
      id: 3,
      title: 'HSC',
      collegename: 'DoodhSakhar Vidyaniketan, Bidri',
      time: 'Full Time',
      year: '2016-2018'
    },
    {
      id: 4,
      title: 'SSC',
      collegename: 'Shree Namdevrao Bhoite High School',
      time: 'Full Time',
      year: '2016'
    }
  ]

  return (
    <div className='h-full w-full bg-gray-900 sm:px-14 px-8 py-8'>
      {/* About Me Section */}
      <section className='text-left mb-12 md:px-7 lg:mx-6'>
        <h2 className='text-purple-500 text-2xl font-bold mb-4'>About Me</h2>
        <div className='flex flex-col md:flex-row items-start justify-between gap-10'>
          <div className='flex flex-col md:flex-row md:max-w-2xl '>
            <div className='md:hidden flex w-full md:h-1 h-[1px] bg-purple-600 mb-4'></div>
            <div className='md:w-[80%] w-full'>
              <p className='text-white text-justify text-sm'>
                Hello! I'm Sujata Powar, a passionate and detail-oriented
                frontend developer. I specialize in creating beautiful,
                responsive, and user-friendly web applications. With a strong
                foundation in HTML, CSS, and JavaScript, and expertise in modern
                frameworks like React, I strive to bring innovative and
                efficient solutions to life.
              </p>
              <p className='text-white mt-4 text-justify text-sm'>
                My goal is to deliver seamless user experiences while
                maintaining clean and maintainable code.
              </p>
            </div>
          </div>

          {/* Role Sections */}
          <div className='grid grid-cols-1 md:grid-cols-1 gap-4 w-full md:max-w-md'>
            {['Front-End Developer', 'Website Designer'].map((role, index) => (
              <div
                key={index}
                className='bg-gray-800 p-3 rounded-lg lg:w-[100%] flex flex-row items-start justify-between'
              >
                <div className='flex justify-between items-start flex-col '>
                  <h3 className='text-white text-lg mb-1'>{role}</h3>
                  <Link
                    to='/projects'
                    className='text-purple-500  hover:text-purple-400 text-sm'
                  >
                    Projects
                  </Link>
                </div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-5 text-purple-500'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5'
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className='sm:mt-40 mt-10 pt-9 pb-4 text-center   md:bg-slate-950 md:px-7 lg:mx-14 '>
        <h2 className='text-purple-600 text-3xl font-bold '>Education</h2>
        <div className='flex flex-col items-center  my-10'>
          {education.map(data => (
            <div
              key={data.id}
              className='bg-gray-800 w-full max-w-4xl p-6 mb-6 rounded-lg text-left flex flex-col sm:flex-row flex-wrap items-start justify-between gap-4 transition-transform transform hover:scale-105 focus:outline-none'
            >
              <div className='flex text-left items-start gap-4'>
                <div className='bg-purple-900 p-2 rounded-full'>
                  <IoSchool className='text-white text-xl ' fontSize='small ' />
                </div>
                {/* <div className='flex items-start justify-start flex-col md:flex-row'> */}
                <div className='flex-1'>
                  <h3 className='text-white text-base font-semibold'>
                    {data.title}
                  </h3>
                  <p className='text-gray-300 text-sm'>{data.collegename}</p>
                </div>
              </div>
              <div className='flex flex-col items-center gap-1'>
                <span className='text-green-800 bg-green-200 px-2 py-1 rounded-full text-xs'>
                  {data.time}
                </span>
                <p className='text-gray-400 text-xs'>{data.year}</p>
              </div>
              {/* </div> */}
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className=' sm:my-20 my-10   lg:mx-10 pb-14'>
        <h2 className='text-purple-500 text-left text-2xl font-bold mb-6'>
          My Skills
        </h2>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 justify-items-center w-full  px-1 pt-8'>
          {skills.map((skill, index) => (
            <div
              key={index}
              className='w-36   bg-gray-800 px-1 py-4 rounded-lg text-center hover:scale-105 transform transition-transform duration-300'
            >
              <img
                src={skill.img}
                alt={skill.title}
                className='w-14 h-16 mx-auto mb-4'
              />
              <h3 className='text-white text-lg'>{skill.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About
