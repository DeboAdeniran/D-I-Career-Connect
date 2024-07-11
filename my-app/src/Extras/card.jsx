import React, { useEffect, useState } from 'react';
import logo from '../SVG Files/D&I logo.svg';
import bknormal from '../SVG Files/bookmarknormal.svg';
import bkfilled from '../SVG Files/bookmarkfilled.svg';

function Card({ jobTitle, companyName, companyLogo, jobEmploymentType, jobMinSalary, jobMaxSalary, jobSalaryCurrency, jobSalaryPeriod, jobCity, jobState, jobCountry, onDetailsClick }) {
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [colorIndex, setColorIndex] = useState(0);

    useEffect(() => {
        const index = Math.floor(Math.random() * 6);
        setColorIndex(index);
    }, []);

    const salaryAve = jobMinSalary && jobMaxSalary ? (jobMinSalary + jobMaxSalary) / 2 : null;

    const handleBookmarkClick = () => {
        setIsBookmarked(!isBookmarked);
    };

    const colors = ["#e3dbfa", '#fbe2fa', '#ffe1cc', '#d4f6ed', '#A49694', '#B7B868', '#C3E8BD', '#CDC6AE', '#EDDEA4'];
    const changeBGcolor = colors[colorIndex];

    return (
        <div className="Card_container">
            <div>
                <div className="card_main" style={{ backgroundColor: `${changeBGcolor}` }}>
                    <div className="card_top">
                        <img className='comlogo' src={logo} alt="" height="20" width="20" />
                        <img className='bk' src={isBookmarked ? bkfilled : bknormal} alt="" height="20" width="20" onClick={handleBookmarkClick} />
                    </div>
                    <p className="cardComName" id="comname">{companyName}</p>
                    <div className="card_Mid">
                        <p id="jobtitle">{jobTitle} </p>
                    </div>
                    <div className="card_details">
                        <span id='details'>{jobEmploymentType}</span>
                    </div>
                </div>
                <div className="card_footer">
                    <div className="card_ftc">
                        <span id="pay">{jobSalaryCurrency}{salaryAve}/{jobSalaryPeriod}</span>
                        <span id="location">{jobCity}, {jobState}</span>
                        <span id="location">{jobCountry}</span>
                    </div>
                    <button id="detailsBtn" onClick={onDetailsClick}>Details</button>
                </div>
            </div>
        </div>
    );
}

export default Card;
