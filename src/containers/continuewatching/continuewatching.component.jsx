import React from 'react'

import './continuewatching.component.css'

import guardiansOfTheGalaxyImage from '../../assets/images/guardians_of_the_galaxy.png'
import theLastOfUsImage from '../../assets/images/the_last_of_us.png'
import godzillaImage from '../../assets/images/godzilla.png'

export default function ContinuewatchingComponent() {
  return (
    <div className='continue-watching-component-container'>
        <p className="continue-watching-title">
            Continue Watching 
        </p> 
        <div className="continue-watching-movies-container">
            <div className="continue-watching-movies-card" style={{ backgroundImage: `url(${guardiansOfTheGalaxyImage})` }}>
                <div className="continue-watching-movie-card-details">
                    <p>Guardians of the Galaxy Vol. 3</p>
                    <span>2023</span>
                    <div className="continue-watching-movies-card-details-player">
                        Player
                    </div>
                </div>
            </div>
            <div className="continue-watching-movies-card" style={{ backgroundImage: `url(${theLastOfUsImage})` }}>
                <div className="continue-watching-movie-card-details">
                    <p>The Last of Us - Episode 4</p>
                    <span>2023</span>
                    <div className="continue-watching-movies-card-details-player">
                        Player
                    </div>
                </div>
            </div>
            <div className="continue-watching-movies-card" style={{ backgroundImage: `url(${godzillaImage})` }}>
                <div className="continue-watching-movie-card-details">
                    <p>Godzilla</p>
                    <span>2023</span>
                    <div className="continue-watching-movies-card-details-player">
                        Player
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
