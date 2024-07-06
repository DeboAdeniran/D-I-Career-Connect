import React from 'react';



function Card({    jobTitle,companyName,companyLogo,jobEmploymentType,
                   jobMinSalary,jobMaxSalary,jobSalaryCurrency,
                   jobSalaryPeriod,jobCity,jobState,jobCountry}){

                    const salaryAve = jobMinSalary && jobMaxSalary ? (jobMinSalary + jobMaxSalary) / 2 : null;

    return(
        <div className="Card_container">
            <div>
            <div className="card_main">
                <div className="card_top">
                    <p id="comlogo"><img src={companyLogo} alt="" /></p>
                    <p id="bk">Bookmark</p>
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
                <button id="detailsBtn">Details</button>
            </div>
            </div>
        </div>
    );
}

export default Card