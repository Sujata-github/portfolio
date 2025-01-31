// // import React from 'react'
// // import { Outlet } from 'react-router-dom'
// // import Header from './Header'
// // import Footer from './Footer'

// // const Layout = () => {
// //   return (
// //     <div className='flex flex-col h-screen w-screen overflow-hidden'>
// //       {/* Header */}
// //       <div className='h-[56px]'>
// //         <Header />
// //       </div>

// //       {/* Main content */}
// //       <div className=' flex-grow overflow-y-auto overflow-x-hidden w-full bg-gray-900'>
// //         <Outlet />
// //         {/* <Footer /> */}
// //       </div>

// //       {/* Footer */}
// //       <div className='overflow-x-hidden  '>
// //         <Footer />
// //       </div>
// //     </div>
// //   )
// // }

// // export default Layout
// import React from 'react'
// import { Outlet } from 'react-router-dom'
// import Header from './Header'
// import Footer from './Footer'

// const Layout = () => {
//   return (
//     <div className='flex flex-col min-h-screen w-screen overflow-hidden'>
//       {/* Header */}
//       <div className='h-[56px]'>
//         <Header />
//       </div>

//       {/* Main content */}
//       <div className='flex-grow overflow-y-auto overflow-x-hidden w-full bg-gray-900'>
//         <Outlet />
//       </div>

//       {/* Footer */}
//       <div className='mt-auto'>
//         <Footer />
//       </div>
//     </div>
//   )
// }

// export default Layout
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className='flex flex-col min-h-screen overflow-hidden bg-gray-900'>
      {/* Header */}
      <div className='h-[56px]'>
        <Header />
      </div>

      {/* Main content */}
      <div className='flex-grow overflow-y-auto w-full'>
        <Outlet />
      </div>

      {/* Footer */}
      <div className='mt-auto'>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
