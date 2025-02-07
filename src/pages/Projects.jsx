import React, { useEffect } from 'react'
import portfolio from '../assets/portfolio.png'
import shopsy from '../assets/shopsy.png'
import construction from '../assets/construction.png'
import tomato from '../assets/tomato.png'
import backpack from '../assets/backpack.png'
import expImg1 from '../assets/expImag1.jpeg'
import redux from '../assets/redux.png'
import zula from '../assets/zula.png'
import suyotech from '../assets/suyotech.png'

import { IoMdOpen } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0) // Scroll to top of the page on every render
  }, [])
  const workProjects = [
    {
      id: 1,
      title: 'Zula Trading',
      img: zula,
      description:
        'Zula Trading is an innovative automated trading software service tailored for short-term trading strategies.',
      skills: ['React', 'JavaScript', 'Material UI', 'API Integration'],
      link: 'https://zulatrading.in/'
    },
    {
      id: 2,
      title: 'Suyotech Solutions Website',
      img: suyotech,
      description:
        'Design and Developed a professional website for Suyotech,featuring sections for services,technologies,about us contact us and training.',
      skills: ['React', 'JavaScript', 'MUI', 'Responsive Web Design'],
      link: 'https://www.suyotech.com/'
    }
  ]
  const personalProjects = [
    {
      id: 1,
      title: 'Portfolio Website',
      img: portfolio,
      description:
        'A personal portfolio website to showcase my skills and projects.',
      skills: ['React', 'JavaScript', 'TailWind CSS'],
      link: '#'
    },
    {
      id: 2,
      title: 'Food Delievery Website',
      img: tomato,
      description: 'An e-commerce platform for food product listings and cart.',
      skills: [
        'React',
        'JavaScript',
        'TailWind Css',
        'Node.js',
        'MongoDB',
        'Express.js'
      ],
      link: 'https://food-del-frontend-o791.onrender.com/'
    },
    {
      id: 3,
      title: 'Product Configurator',
      img: backpack,
      description: 'Developed a product configurator for customizing bags.',
      skills: ['React', 'JavaScript', 'Material UI', 'State Management'],
      link: 'https://backpack-product-configurator.web.app/'
    },
    {
      id: 4,
      title: 'Construction Company Template',
      img: construction,
      description:
        'Created a Construction Company Template with a professional design, showcasing services, projects, and client testimonials.',
      skills: ['React', 'JavaScript', 'TailWind Css'],
      link: 'https://construction-company-app-6f2c6.web.app'
    },
    {
      id: 5,
      title: 'Redux Crud App',
      img: redux,
      description:
        'A web app showcasing Create, Read, Update, and Delete operations using Redux for state management.',
      skills: [
        'React',
        'Material UI',
        'Node.js',
        'MongoDB',
        'Express.js',
        'Redux'
      ],
      link: '#'
    },
    {
      id: 6,
      title: 'Shopsy-Ecommerce WebPage',
      img: shopsy,
      description:
        'Built Shopsy, an e-commerce webpage for clothing with smooth navigation and dynamic product displays.',
      skills: ['React', 'JavaScript', 'TailWind Css'],
      link: 'https://shopsy-3e318.web.app/'
    }
  ]

  return (
    <div className='h-full w-full bg-gray-900 px-6 py-6'>
      {/* <div className='text-center mb-6 '>
        <h2 className='text-violet-500 font-bold text-2xl text-center px-6 '>
          My Projects
        </h2>
      </div> */}
      <div className='flex flex-col md:flex-row items-center justify-center gap-2 py-2'>
        <h2 className='text-violet-500 font-bold text-2xl text-left px-6'>
          Professional Projects
        </h2>
        <hr className='flex-1 border-t-[1px] border-t-violet-500  w-full' />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:px-4 px-2 py-5 pb-20'>
        {workProjects.map(project => (
          <div
            key={project.id}
            className='relative h-auto  bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between'
          >
            <img
              src={project.img}
              alt={project.title}
              className='w-full h-44   object-fill '
            />
            <div className='flex flex-col justify-between flex-1 '>
              <div className='p-4 flex-1'>
                <h3 className='text-lg font-semibold text-gray-200'>
                  {project.title}
                </h3>
                <p className='text-sm text-gray-400 mt-2'>
                  {project.description}
                </p>
                <div className='mt-2'>
                  <p className='text-sm text-gray-300'>Tech Stack:</p>
                  <div className='flex flex-wrap gap-2 mt-1'>
                    {project.skills.map((skill, index) => (
                      <span
                        key={index}
                        className='text-xs bg-gray-700 text-gray-300 py-1 px-2 rounded-full'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Horizontal Rule and Live Preview Section */}
              <div className=' pt-0'>
                <hr className='my-1 border-t-[0.5px] border-t-slate-600 w-full mx-0 px-0' />
                {/* <Link
                  to={project.link}
                  className='flex items-center text-sm text-purple-500 hover:text-purple-800 px-4  bottom-2 py-2'
                >
                  <IoMdOpen className='text-purple-500 mr-1 text-sm ' />
                  <span className='text-purple-500 text-sm '>Live Preview</span>
                </Link> */}
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center text-sm text-purple-500 hover:text-purple-800 px-4 bottom-2 py-2'
                >
                  <IoMdOpen className='text-purple-500 mr-1 text-sm ' />
                  <span className='text-purple-500 text-sm '>Live Preview</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center gap-2 py-2'>
        <h2 className='text-violet-500 font-bold text-2xl text-left px-6'>
          Personal Projects
        </h2>
        <hr className='flex-1 border-t-[1px] border-t-violet-500 w-full' />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:px-4 px-2 py-5 pb-20'>
        {personalProjects.map(project => (
          <div
            key={project.id}
            className='relative h-auto bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden flex flex-col justify-between'
          >
            <img
              src={project.img}
              alt={project.title}
              className='w-full h-44   object-fill '
            />
            <div className='flex flex-col justify-between flex-1 '>
              <div className='p-4 flex-1'>
                <h3 className='text-lg font-semibold text-gray-200'>
                  {project.title}
                </h3>
                <p className='text-sm text-gray-400 mt-2'>
                  {project.description}
                </p>
                <div className='mt-2'>
                  <p className='text-sm text-gray-300'>Tech Stack:</p>
                  <div className='flex flex-wrap gap-2 mt-1'>
                    {project.skills.map((skill, index) => (
                      <span
                        key={index}
                        className='text-xs bg-gray-700 text-gray-300 py-1 px-2 rounded-full'
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Horizontal Rule and Live Preview Section */}
              <div className=' pt-0'>
                <hr className='my-1 border-t-[0.5px] border-t-slate-600 w-full mx-0 px-0' />
                {/* <Link
                  to={project.link}
                  className='flex items-center text-sm text-purple-500 hover:text-purple-800 px-4  bottom-2 py-2'
                >
                  <IoMdOpen className='text-purple-500 mr-1 text-sm ' />
                  <span className='text-purple-500 text-sm '>Live Preview</span>
                </Link> */}
                <a
                  href={project.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center text-sm text-purple-500 hover:text-purple-800 px-4 bottom-2 py-2'
                >
                  <IoMdOpen className='text-purple-500 mr-1 text-sm ' />
                  <span className='text-purple-500 text-sm '>Live Preview</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
