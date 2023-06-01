import React from 'react'
import HeaderNavbar from './header.navbar.component'
import HeaderCarousel from './header.carousel.component'
import './header.container.styles.css'


export default function HeaderContainer() {
  return (
    <div className='header'>
      <div className='header-container'>
          <HeaderNavbar/>
          <HeaderCarousel/>
      </div>
    </div>
  )
}
