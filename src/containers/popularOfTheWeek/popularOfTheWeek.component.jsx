import React from 'react'

import theLastOfUsImage from '../../assets/images/popularOfTheWeekImages/the_last_of_us_image.png'
import gotgImage from '../../assets/images/popularOfTheWeekImages/gotg-image.png'
import theFlashImage from '../../assets/images/popularOfTheWeekImages/the_flash_image.png'
import theManFromTorontoImage from '../../assets/images/popularOfTheWeekImages/the_man_from_toronto.png'

import './popularOfTheWeek.component.css'

const movieIcon = <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1733 2.5H3.82667C3.3422 2.5 2.87758 2.69245 2.53502 3.03502C2.19245 3.37758 2 3.8422 2 4.32667V12.6733C2 13.1578 2.19245 13.6224 2.53502 13.965C2.87758 14.3075 3.3422 14.5 3.82667 14.5H12.1733C12.6578 14.5 13.1224 14.3075 13.465 13.965C13.8075 13.6224 14 13.1578 14 12.6733V4.32667C14 3.8422 13.8075 3.37758 13.465 3.03502C13.1224 2.69245 12.6578 2.5 12.1733 2.5V2.5ZM4.66667 7.83333H3.33333V6.5H4.66667V7.83333ZM3.33333 9.16667H4.66667V10.5H3.33333V9.16667ZM12.6667 7.83333H11.3333V6.5H12.6667V7.83333ZM11.3333 9.16667H12.6667V10.5H11.3333V9.16667ZM12.6667 4.32667V5.16667H11.3333V3.83333H12.1733C12.2381 3.83333 12.3023 3.84609 12.3621 3.87089C12.422 3.89568 12.4764 3.93202 12.5222 3.97783C12.568 4.02364 12.6043 4.07802 12.6291 4.13788C12.6539 4.19773 12.6667 4.26188 12.6667 4.32667V4.32667ZM3.82667 3.83333H4.66667V5.16667H3.33333V4.32667C3.33333 4.26188 3.34609 4.19773 3.37089 4.13788C3.39568 4.07802 3.43202 4.02364 3.47783 3.97783C3.52364 3.93202 3.57802 3.89568 3.63788 3.87089C3.69773 3.84609 3.76188 3.83333 3.82667 3.83333ZM3.33333 12.6733V11.8333H4.66667V13.1667H3.82667C3.76188 13.1667 3.69773 13.1539 3.63788 13.1291C3.57802 13.1043 3.52364 13.068 3.47783 13.0222C3.43202 12.9764 3.39568 12.922 3.37089 12.8621C3.34609 12.8023 3.33333 12.7381 3.33333 12.6733V12.6733ZM12.6667 12.6733C12.6667 12.8042 12.6147 12.9297 12.5222 13.0222C12.4297 13.1147 12.3042 13.1667 12.1733 13.1667H11.3333V11.8333H12.6667V12.6733Z" fill="#78828A"/>
</svg>


const starIcon = <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.2977 2.63242L11.6177 5.27242C11.7977 5.63992 12.2777 5.99242 12.6827 6.05992L15.0752 6.45742C16.6052 6.71242 16.9652 7.82242 15.8627 8.91742L14.0027 10.7774C13.6877 11.0924 13.5152 11.6999 13.6127 12.1349L14.1452 14.4374C14.5652 16.2599 13.5977 16.9649 11.9852 16.0124L9.74268 14.6849C9.33768 14.4449 8.67018 14.4449 8.25768 14.6849L6.01518 16.0124C4.41018 16.9649 3.43518 16.2524 3.85518 14.4374L4.38768 12.1349C4.48518 11.6999 4.31268 11.0924 3.99768 10.7774L2.13768 8.91742C1.04268 7.82242 1.39518 6.71242 2.92518 6.45742L5.31768 6.05992C5.71518 5.99242 6.19518 5.63992 6.37518 5.27242L7.69518 2.63242C8.41518 1.19992 9.58518 1.19992 10.2977 2.63242Z" fill="#FFCD1A"/>
</svg>


export default function PopularOfTheWeekComponent() {
  return (
    <div className='popularOfTheWeek-component'>
        <p className='popularOfTheWeek-component-title'>Popular of the week</p>
        <div className="popularOfTheWeek-movies">
            <div className="popularOfTheWeek-movie active">
                <div className="popularOfTheWeek-movie-number">
                    1
                </div>
                <div className="popularOfTheWeek-movie-image">
                    <img src={theLastOfUsImage} alt="The last of us" />
                </div>
                <div className="popularOfTheWeek-movie-description">
                    <p className='popularOfTheWeek-movie-description-label'>PG-13</p>
                    <p className='popularOfTheWeek-movie-description-title'>The Last Of Us</p>
                    <p className="popularOfTheWeek-movie-description-genres">
                        { movieIcon } Horror • Thriller
                    </p>
                    <p className="popularOfTheWeek-movie-description-rating">
                        { starIcon } 
                        <span>4.3 </span>| Movie
                    </p>
                </div>
            </div>
            <div className="popularOfTheWeek-movie">
                <div className="popularOfTheWeek-movie-number">
                    2
                </div>
                <div className="popularOfTheWeek-movie-image">
                    <img src={gotgImage} alt="GOTG 3 image" />
                </div>
                <div className="popularOfTheWeek-movie-description">
                    <p className='popularOfTheWeek-movie-description-label'>PG-13</p>
                    <p className='popularOfTheWeek-movie-description-title'>GOTG 3</p>
                    <p className="popularOfTheWeek-movie-description-genres">
                        { movieIcon  } | Superhero • Action
                    </p>
                    <p className="popularOfTheWeek-movie-description-rating">
                        { starIcon } 
                        <span>4.9</span> | Movie
                    </p>
                </div>
            </div>
            <div className="popularOfTheWeek-movie">
                <div className="popularOfTheWeek-movie-number">
                    3
                </div>
                <div className="popularOfTheWeek-movie-image">
                    <img src={theFlashImage} alt="The last of us" />
                </div>
                <div className="popularOfTheWeek-movie-description">
                    <p className='popularOfTheWeek-movie-description-label'>PG-13</p>
                    <p className='popularOfTheWeek-movie-description-title'>The Flash</p>
                    <p className="popularOfTheWeek-movie-description-genres">
                        { movieIcon } Comedy • Action
                    </p>
                    <p className="popularOfTheWeek-movie-description-rating">
                        { starIcon } 
                        <span>3.7 </span>| Movie
                    </p>
                </div>
            </div>
            <div className="popularOfTheWeek-movie">
                <div className="popularOfTheWeek-movie-number">
                    4
                </div>
                <div className="popularOfTheWeek-movie-image">
                    <img src={theManFromTorontoImage} alt="The Man from Toronto" />
                </div>
                <div className="popularOfTheWeek-movie-description">
                    <p className='popularOfTheWeek-movie-description-label'>PG-13</p>
                    <p className='popularOfTheWeek-movie-description-title'>The Man from Toronto</p>
                    <p className="popularOfTheWeek-movie-description-genres">
                        { movieIcon } Comedy • Action
                    </p>
                    <p className="popularOfTheWeek-movie-description-rating">
                        { starIcon } 
                        <span>4.4 </span>| Movie
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}
