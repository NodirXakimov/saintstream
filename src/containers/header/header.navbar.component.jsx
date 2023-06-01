import React from "react";
import "./header.navbar.styles.css";
import brandLogo from "../../assets/icons/brand_logo.png";
import avatarIcon from "../../assets/icons/avatar_icon.png";

const searchSvg = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
const ringSvg = <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
const downArrowSvg = <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.72473 6.64137C3.94661 6.41948 4.29383 6.39931 4.53851 6.58086L4.60861 6.64137L10 12.0325L15.3914 6.64137C15.6133 6.41948 15.9605 6.39931 16.2052 6.58086L16.2753 6.64137C16.4972 6.86326 16.5173 7.21048 16.3358 7.45516L16.2753 7.52525L10.4419 13.3586C10.2201 13.5805 9.87283 13.6006 9.62816 13.4191L9.55806 13.3586L3.72473 7.52525C3.48065 7.28118 3.48065 6.88545 3.72473 6.64137Z" fill="#F9F9F9"/>
</svg>




export default function HeaderNavbar() {
  return (
    <div className="header-navbar-container">
      <div className="header-navbar-brand">
        <img src={brandLogo} alt="Brand logo" />
      </div>
      <ul className="header-navbar-menu">
        <li>Home</li>
        <li>Discover</li>
        <li>Movie Release</li>
        <li>Forum</li>
        <li>About</li>
      </ul>
      <div className="header-navbar-status">
        {searchSvg}
        {ringSvg}
        <div className="header-navbar-status-profile">
          <img src={avatarIcon} alt="Avatar icon" />
        {downArrowSvg}          
        </div>
      </div>
    </div>
  );
}
