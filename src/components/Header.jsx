// import React, { useState } from 'react'
// import { useLocation, Link } from 'react-router-dom'

// const navItems = [
//   { id: 1, name: 'Home', path: '/' },
//   { id: 2, name: 'About', path: '/about' },
//   { id: 3, name: 'Projects', path: '/projects' },
//   { id: 4, name: 'Experience', path: '/experience' },
//   { id: 6, name: 'Contact', path: '/contact' }
// ]

// function Header () {
//   const [mobileOpen, setMobileOpen] = useState(false)
//   const location = useLocation()

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen)
//   }

//   return (
//     <div className='fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50'>
//       <div className='flex items-center justify-between px-4 py-3 md:px-8'>
//         {/* Branding */}
//         <div className='flex items-center space-x-2'>
//           <div className='h-6 w-1 bg-purple-600'></div>
//           <Link to='/' className='text-lg font-bold hover:text-purple-600'>
//             Sujata Powar
//           </Link>
//         </div>

//         {/* Mobile Menu Toggle Button */}
//         <button
//           className='md:hidden focus:outline-none'
//           onClick={handleDrawerToggle}
//         >
//           <svg
//             className='w-6 h-6'
//             fill='none'
//             stroke='currentColor'
//             viewBox='0 0 24 24'
//             xmlns='http://www.w3.org/2000/svg'
//           >
//             <path
//               strokeLinecap='round'
//               strokeLinejoin='round'
//               strokeWidth='2'
//               d='M4 6h16M4 12h16M4 18h16'
//             />
//           </svg>
//         </button>

//         {/* Desktop Navigation */}
//         <nav className='hidden md:flex space-x-4'>
//           {navItems.map(item => (
//             <Link
//               key={item.id}
//               to={item.path}
//               className={`px-3 py-2 text-sm font-medium transition border-b-2 hover:text-purple-600  ${
//                 location.pathname === item.path
//                   ? 'border-purple-600 text-white'
//                   : 'border-transparent text-gray-400'
//               }`}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </nav>
//       </div>

//       {/* Mobile Navigation */}
//       {mobileOpen && (
//         <nav className='md:hidden bg-gray-800'>
//           <ul className='space-y-1 px-4 py-2'>
//             {navItems.map(item => (
//               <li key={item.id}>
//                 <Link
//                   to={item.path}
//                   onClick={handleDrawerToggle}
//                   className={`block px-3 py-2 rounded-md text-sm font-medium transition hover:bg-purple-600 hover:text-white ${
//                     location.pathname === item.path
//                       ? 'bg-purple-600 text-white'
//                       : 'text-gray-300'
//                   }`}
//                 >
//                   {item.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </nav>
//       )}
//     </div>
//   )
// }

// export default Header
// import React, { useState } from 'react'
// import { Link, useLocation } from 'react-router-dom'
// // import { MenuIcon, XIcon } from '@heroicons/react/outline'
// import { HiMiniBars3 } from 'react-icons/hi2'
// import { MdClose } from 'react-icons/md'

// const navItems = [
//   { id: 1, name: 'Home', path: '/' },
//   { id: 2, name: 'About', path: '/about' },
//   { id: 3, name: 'Projects', path: '/projects' },
//   { id: 4, name: 'Experience', path: '/experience' },
//   { id: 6, name: 'Contact', path: '/contact' }
// ]

// const Header = () => {
//   const [mobileOpen, setMobileOpen] = useState(false)
//   const location = useLocation()

//   const toggleDrawer = () => {
//     setMobileOpen(!mobileOpen)
//   }

//   return (
//     <header className='fixed top-0 left-0 w-full bg-gray-900 z-50'>
//       <div className='flex justify-between items-center px-6 py-4 md:px-12'>
//         {/* Logo Section */}
//         <div className='flex items-center space-x-2'>
//           <div className='h-6 w-1 bg-purple-600'></div>
//           <Link
//             to='/'
//             className='text-white text-lg font-semibold hover:text-purple-600'
//           >
//             Sujata Powar
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <nav className='hidden md:flex space-x-6'>
//           {navItems.map(item => (
//             <Link
//               key={item.id}
//               to={item.path}
//               className={`text-sm font-medium transition ${
//                 location.pathname === item.path
//                   ? 'text-white border-b-2 border-purple-600'
//                   : 'text-gray-400 hover:text-purple-600'
//               }`}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </nav>

//         {/* Mobile Menu Icon */}
//         <button
//           className='text-white md:hidden'
//           onClick={toggleDrawer}
//           aria-label='Toggle menu'
//         >
//           {mobileOpen ? (
//             <MdClose className='h-6 w-6' />
//           ) : (
//             <HiMiniBars3 className='h-6 w-6' />
//           )}
//         </button>
//       </div>

//       {/* Mobile Drawer */}
//       {mobileOpen && (
//         <nav className='md:hidden bg-gray-800 text-white px-6 py-4 '>
//           {navItems.map(item => (
//             <Link
//               key={item.id}
//               to={item.path}
//               onClick={() => setMobileOpen(false)}
//               className={`block py-2 text-sm font-medium ${
//                 location.pathname === item.path
//                   ? 'text-white border-b-2 border-purple-600'
//                   : 'text-gray-400 hover:text-purple-600'
//               }`}
//             >
//               {item.name}
//             </Link>
//           ))}
//         </nav>
//       )}
//     </header>
//   )
// }

// export default Header
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiMiniBars3 } from 'react-icons/hi2'
import { MdClose } from 'react-icons/md'

const navItems = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'About', path: '/about' },
  { id: 3, name: 'Projects', path: '/projects' },
  { id: 4, name: 'Experience', path: '/experience' },
  { id: 6, name: 'Contact', path: '/contact' }
]

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <header
      className='fixed top-0 left-0 w-full
     bg-gray-900
     z-50'
    >
      <div className='flex justify-between items-center px-6 py-4 md:px-12'>
        {/* Logo Section */}
        <div className='flex items-center space-x-2'>
          <div className='h-6 w-1 bg-purple-600'></div>
          <Link
            to='/'
            className='text-white text-lg font-semibold hover:text-purple-600'
          >
            Sujata Powar
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex space-x-6'>
          {navItems.map(item => (
            <Link
              key={item.id}
              to={item.path}
              className={`text-sm font-medium transition ${
                location.pathname === item.path
                  ? 'text-white border-b-2 border-purple-600'
                  : 'text-gray-400 hover:text-purple-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className='text-white md:hidden'
          onClick={toggleDrawer}
          aria-label='Toggle menu'
        >
          {mobileOpen ? (
            <MdClose className='h-6 w-6' />
          ) : (
            <HiMiniBars3 className='h-5 w-5' />
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <nav
          className='fixed top-0 left-0 h-full w-48 bg-gray-800 text-white px-6 py-4 z-40'
          style={{ width: '200px' }}
        >
          <div className='flex flex-row items-center justify-between '>
            <h2 className='text-white text-base font-semibold'>Menu</h2>
            {/* Close Icon */}
            <button
              className='absolute top-4 right-4 text-white'
              onClick={() => setMobileOpen(false)}
              aria-label='Close menu'
            >
              <MdClose className='h-5 w-5 text-gray-300' />
            </button>
          </div>
          <hr className='w-48 ml-[-19px] my-4 border-t-1 border-gray-600' />
          {navItems.map(item => (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={` block py-2 text-sm font-medium ${
                location.pathname === item.path
                  ? 'text-purple-600'
                  : 'text-gray-400 hover:text-purple-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}

export default Header
