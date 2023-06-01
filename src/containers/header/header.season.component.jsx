import React from 'react'
import "./header.season.styles.css"

const playButtonSvg = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.6 12C20.6 16.7496 16.7497 20.6 12 20.6C7.25038 20.6 3.40002 16.7496 3.40002 12C3.40002 7.25035 7.25038 3.39999 12 3.39999C16.7497 3.39999 20.6 7.25035 20.6 12ZM12.0204 7.76948C11.3453 7.31943 10.4773 7.27747 9.76194 7.66031C9.04659 8.04315 8.60002 8.78865 8.60002 9.6V14.4C8.60002 15.2113 9.04659 15.9568 9.76194 16.3397C10.4773 16.7225 11.3453 16.6806 12.0204 16.2305L15.6204 13.8305C16.2324 13.4225 16.6 12.7356 16.6 12C16.6 11.2644 16.2324 10.5775 15.6204 10.1695L12.0204 7.76948Z" fill="white" stroke="white" stroke-width="2"/>
</svg>
const watchButtonSvg = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7519 11.1679L11.5547 9.03647C10.8901 8.59343 10 9.06982 10 9.86852V14.1315C10 14.9302 10.8901 15.4066 11.5547 14.9635L14.7519 12.8321C15.3457 12.4362 15.3457 11.5638 14.7519 11.1679Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
const addButtonSvg = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 5C5 3.89543 5.89543 3 7 3H17C18.1046 3 19 3.89543 19 5V21L12 17.5L5 21V5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

export default function HeaderSeason() {
  return (
    <div className='header-season'>
        <span className='header-season-label'>Season 3</span>
        <p className='header-season-title'>The Mandalorian</p>
        <span className='header-season-categories'>2h40m • 2022 • Fantasy • Actions</span>
        <p className='header-season-description'>The third season of the American television series The Mandalorian stars Pedro Pascal as the title character, a bounty hunter traveling to Mandalore to redeem his past transgressions with his adopted son Grogu and being aided on their journey by fellow Mandalorian Bo-Katan Kryze.</p>
        <div className="header-season-buttons">
            <button className="header-season-button-play">
                {playButtonSvg}<span>Play Now</span>
            </button>
            <button className="header-season-button-watch">
                {watchButtonSvg}<span>Watch Trailer</span>
            </button>
            <button className="header-season-button-add">
                {addButtonSvg}<span>Add Watchlist</span>
            </button>
        </div>
    </div>
  )
}
