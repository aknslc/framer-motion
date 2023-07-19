import React from 'react'
import Navbar from '../Navbar'
import HeaderContent from '../HeaderContent'
const Header = () => {
  return (
    <header className='bg-custom-image bg-cover bg-no-repeat bg-top h-auto'>
      <Navbar />
      <HeaderContent />
    </header>
  )
}

export default Header