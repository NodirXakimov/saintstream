import React from 'react'
import './partners.component.css'

import disneyIcon from '../../assets/icons/disney_icon.png'
import netflixIcon from '../../assets/icons/netflix_icon.png'
import hboMaxIcon from '../../assets/icons/hbomax_icon.png'
import marvelIcon from '../../assets/icons/marvel_icon.png'
import pixarIcon from '../../assets/icons/pixar_icon.png'
import starWarsIcon from '../../assets/icons/star_wars_icon.png'
import nationalGeographicsIcon from '../../assets/icons/national_geographic_icon.png'

export default function PartnersComponent() {
  return (
    <div className='partners-component'>
        <div className="partners-component-item">
            <img src={disneyIcon} alt="Disney icon" />
        </div>
        <div className="partners-component-item">
            <img src={netflixIcon} alt="Netflix icon" />
        </div>
        <div className="partners-component-item">
            <img src={hboMaxIcon} alt="Hbo max icon" />
        </div>
        <div className="partners-component-item">
            <img src={pixarIcon} alt="Pixar icon" />
        </div>
        <div className="partners-component-item">
            <img src={marvelIcon} alt="Marvel icon" />
        </div>
        <div className="partners-component-item">
            <img src={starWarsIcon} alt="Star Wars icon" />
        </div>
        <div className="partners-component-item">
            <img src={nationalGeographicsIcon} alt="National Geographics icon" />
        </div>
    </div>
  )
}
