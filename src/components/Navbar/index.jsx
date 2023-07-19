import React from 'react'

const Navbar = () => {
  return (
    <nav className='h-[70px] flex items-center sticky top-2 z-10'>
      <div className="container">
        <ul className='flex justify-center items-center'>
          <li className='mx-6 bg-yellow-400 rounded-lg p-2'><a className='font-lumanosimo text-white font-extrabold' href="">Home</a></li>
          <li className='mx-6'><a className='font-lumanosimo text-white font-bold' href="">About</a></li>
          <li className='mx-6'><a className='font-lumanosimo text-white font-bold' href="">Contact</a></li>
          <li className='mx-6'><a className='font-lumanosimo text-white font-bold' href="">Projects</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar