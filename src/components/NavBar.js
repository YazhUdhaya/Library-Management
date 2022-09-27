import React from 'react'
// import '../index.css'

function NavBar() {
  return<>
  <nav className='main'>
    <div className=' d-flex justify-content-evenly align-items-center'>
        <div className=' text-white mt-4'><h2 >Library Management System</h2></div>
        <div className=' text-white me-2 mt-4 admin-data'>Admin<img src="https://img.icons8.com/ios/50/FFFFFF/admin-settings-male.png"  alt='admin' className=" rounded-circle p-1" style={{width:"3rem"}}/></div>
    </div>
  </nav>
  </>
}

export default NavBar