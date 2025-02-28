import React from 'react'

const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-700 text-white py-2'>
      <div className="logo">
        <span className='font-bold text-xl mx-9'>
          TodoIt
        </span>
      </div>
      <ul className='flex justify-between gap-8 mx-9'>
        <li className='cursor-pointer hover:font-bold transition-all duration-[300ms]'>
          Home
        </li>
        <li className='cursor-pointer hover:font-bold transition-all duration-[300ms]'>
          About
        </li>
        <li className='cursor-pointer hover:font-bold transition-all duration-[300ms]'>
          Contact
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
