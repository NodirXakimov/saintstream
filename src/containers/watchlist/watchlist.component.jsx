import React from "react";

import topGunImage from "../../assets/images/watchlistImages/topGunImage.png"
import spidermanImage from "../../assets/images/watchlistImages/spidermanImage.png"
import blackPantherImage from "../../assets/images/watchlistImages/blackPantherImage.png"
import dawnOfJusticeImage from "../../assets/images/watchlistImages/dawnOfJusticeImage.png"
import redNoticeImage from "../../assets/images/watchlistImages/redNoticeImage.png"

import "./watchlist.component.css"

const starIcon = (
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.2977 2.63248L11.6177 5.27248C11.7977 5.63998 12.2777 5.99248 12.6827 6.05998L15.0752 6.45748C16.6052 6.71248 16.9652 7.82248 15.8627 8.91748L14.0027 10.7775C13.6877 11.0925 13.5152 11.7 13.6127 12.135L14.1452 14.4375C14.5652 16.26 13.5977 16.965 11.9852 16.0125L9.74268 14.685C9.33768 14.445 8.67018 14.445 8.25768 14.685L6.01518 16.0125C4.41018 16.965 3.43518 16.2525 3.85518 14.4375L4.38768 12.135C4.48518 11.7 4.31268 11.0925 3.99768 10.7775L2.13768 8.91748C1.04268 7.82248 1.39518 6.71248 2.92518 6.45748L5.31768 6.05998C5.71518 5.99248 6.19518 5.63998 6.37518 5.27248L7.69518 2.63248C8.41518 1.19998 9.58518 1.19998 10.2977 2.63248Z"
      fill="#FFCD1A"
    />
  </svg>
);

export default function WatchlistComponent() {
  return (
    <div className="watchlist-component">
      <p className="watchlist-title">Your Watchlist</p>
      <div className="watchlist-items-container">
        
        <div className="watchlist-item">
          <div className="watchlist-item-image-container">
            <img src={topGunImage} alt="topGun Image" />
          </div>
          <p className="watchlist-item-title">TOP GUN:Maverick</p>
          <p className="watchlist-item-rating-container">
            <span>{starIcon} 4.6</span> | Action • Movie
          </p>
        </div>
        
        <div className="watchlist-item">
          <div className="watchlist-item-image-container">
            <img src={spidermanImage} alt="spiderman Image" />
          </div>
          <p className="watchlist-item-title">Spiderman; into the spider verse</p>
          <p className="watchlist-item-rating-container">
            <span>{starIcon} 4.6</span> | Action • Movie
          </p>
        </div>
        
        <div className="watchlist-item">
          <div className="watchlist-item-image-container">
            <img src={blackPantherImage} alt="blackPanther Image" />
          </div>
          <p className="watchlist-item-title">Black Panther; Wakanda Forever</p>
          <p className="watchlist-item-rating-container">
            <span>{starIcon} 4.6</span> | Action • Movie
          </p>
        </div>
        
        <div className="watchlist-item">
          <div className="watchlist-item-image-container">
            <img src={dawnOfJusticeImage} alt="dawnOfJustice Image" />
          </div>
          <p className="watchlist-item-title">Batman V Superman</p>
          <p className="watchlist-item-rating-container">
            <span>{starIcon} 4.6</span> | Action • Movie
          </p>
        </div>
        
        <div className="watchlist-item">
          <div className="watchlist-item-image-container">
            <img src={redNoticeImage} alt="redNotice Image" />
          </div>
          <p className="watchlist-item-title">Red Notice</p>
          <p className="watchlist-item-rating-container">
            <span>{starIcon} 4.6</span> | Action • Movie
          </p>
        </div>

      </div>
    </div>
  );
}
