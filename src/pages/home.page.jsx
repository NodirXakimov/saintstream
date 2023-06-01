import React from 'react'
import HeaderContainer from '../containers/header/header.container'
import PartnersContainer from '../containers/partners/partners.container'
import ContinuewatchingContainer from '../containers/continuewatching/continuewatching.container'
import PopularOfTheWeekContainer from '../containers/popularOfTheWeek/popularOfTheWeek.container'

export default function Home() {
  return (
    <div className='home-container'>
        <HeaderContainer/>
        <PartnersContainer />
        <ContinuewatchingContainer />
        <PopularOfTheWeekContainer />
    </div>
  )
}
