import React from 'react'
import HeaderSeasonComponent from './header.season.component'
import HeaderDotsComponent from './header.dots.component'
import './header.carousel.styles.css'

export default function HeaderCarousel() {
  return (
    <div className='header-carousel-container'>
      <HeaderSeasonComponent />
      <HeaderDotsComponent />
    </div>
  )
}
