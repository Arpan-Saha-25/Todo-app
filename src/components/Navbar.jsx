import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-purple-950 text-white py-2'>
      <div className="logo">
        <span className='font-bold text-xl mx-9'>
          TodoIt
        </span>
      </div>
      <ul className='flex justify-between gap-8 mx-9'>
        <li className='cursor-pointer hover:font-bold transition-all duration-[300ms]'>
          <a href="#home"></a>Home
        </li>
        <li className='cursor-pointer hover:font-bold transition-all duration-[300ms]'>
          <a href="https://github.com/Arpan-Saha-25">About Me</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
