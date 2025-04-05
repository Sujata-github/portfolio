import React, { useEffect, useRef, useState } from 'react'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'

const Experience = () => {

  useEffect(() => {
    window.scrollTo(0, 0) // Scroll to top of the page on every render
  }, [])
  const experiencesStage = [
    {
      id: 1,
      startDate: '1 Nov 2023',
      endDate: 'Present',
      companyName: 'Suyotech  Solutions, Kolhapur',
      jobRole: 'Frontend Developer',
      description:
        'Currently, I am working on developing and maintaining web applications using React and Material UI, ensuring high-quality user interfaces and exceptional user experiences. I am also focused on building trading apps and algorithmic trading systems, creating intuitive and performant interfaces for traders, as well as developing websites with a focus on responsive design and accessibility.'
    },
    {
      id: 2,
      startDate: '05 June 2023',
      endDate: '05 October 2023',
      companyName: 'Akron Systems, Kolhapur',
      jobRole: 'Frontend Developer Intern',
      description:
        'Worked as a frontend developer, developed and maintained web applications using React and Typescript, ensuring high-quality user interfaces and exceptional user experiences. Utilized modern web development tools and frameworks to enhance project efficiency and maintain code quality.'
    },
    {
      id: 3,
      startDate: '06 April 2023',
      endDate: '06 June 2023',
      companyName: 'PHN Technology Pvt. Ltd., Pune',
      jobRole: 'Web Developer Intern(Remote)',
      description:
        'Working as a frontend developer, developed and maintained web applications using React and Material UI, ensuring high-quality user interfaces and exceptional user experiences.'
    }
  ]

  const contentRef = useRef(null)
  const [lineHeight, setLineHeight] = useState(500) // Default height as fallback

  useEffect(() => {
    const calculateHeight = () => {
      if (contentRef.current) {
        const contentHeight = contentRef.current.getBoundingClientRect().height
        if (contentHeight > 0) {
          setLineHeight(contentHeight) // Update the line height
        }
      }
    }

    calculateHeight()

    window.addEventListener('resize', calculateHeight)

    return () => {
      window.removeEventListener('resize', calculateHeight)
    }
  }, [])

  const [hoveredStep, setHoveredStep] = useState(null)

  return (
    <div className='  h-full w-full px-8 lg:px-20 py-16 bg-gray-900 '>
      <div className='flex flex-col items-start justify-start bg-gray-900'>
        <div className='relative w-full max-w-4xl  text-white'>
          <h2 className='text-2xl ml-5 font-bold text-purple-500 mb-6'>
            Work Experience
          </h2>
          <div className='flex items-start justify-center  relative sm:ml-10 ml-2 py-6 w-full'>
            {/* Vertical Line */}
            <div
              className={`absolute left-[0.9px] mt-1`}
              style={{
                height: `${lineHeight}px`,
                width: '1.5px',
                backgroundColor: '#52276d'
              }}
            />

            {/* Experience Timeline */}
            <div ref={contentRef} className='relative space-y-14 z-0 '>
              {experiencesStage.map((stage, index) => (
                <div key={stage.id} className='flex items-center relative mb-6'>
                  {/* Circle Beside the Company Name */}
                  <div
                    className={`absolute ${'left-[-6px]'} top-3 ${
                      hoveredStep === index ? 'w-4 h-4' : 'w-3 h-3'
                    } rounded-full bg-purple-600 transition-all`}
                  />

                  {/* Step Content */}
                  <div
                    className='ml-10'
                    onMouseEnter={() => setHoveredStep(index)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    <h3 className='text-xl font-semibold text-white'>
                      {stage.companyName}
                    </h3>
                    <p className='text-sm text-gray-400'>
                      {stage.startDate} - {stage.endDate}
                    </p>
                    <p className='font-bold text-gray-300 mt-2'>
                      Role: {stage.jobRole}
                    </p>
                    <div className='mt-2 '>
                      <p
                        className={`text-base transition-all  ${
                          hoveredStep === index ? 'text-white' : 'text-gray-500'
                        }`}
                      >
                        {stage.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
