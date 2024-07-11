import React, { useState, useEffect } from "react";
import Card from "../Extras/card";
import "../Styles/App.css";
import tune from "../SVG Files/tune.svg";
import Filter from "../Extras/filter";
import SortedBy from "../Extras/sortedBy";  
import JobApplication from "./Jobapplication";  // Import JobApplication component

const countryAbbreviations = {
    // Define your country abbreviations here
};

function Joblist({ jobs }) {
    const [filteredJobs, setFilteredJobs] = useState(jobs);
    const [showSortedBy, setShowSortedBy] = useState(false);  
    const [sortedByFilters, setSortedByFilters] = useState({});  
    const [selectedJob, setSelectedJob] = useState(null);  // State for selected job

    useEffect(() => {
        setFilteredJobs(jobs);
    }, [jobs]);

    const applyFilters = (filters) => {
        let updatedJobs = jobs;

        if (filters.workTypes.length > 0) {
            updatedJobs = updatedJobs.filter(job =>
                filters.workTypes.includes(job.job_employment_type)
            );
        }

        if (filters.officeTypes.length > 0) {
            updatedJobs = updatedJobs.filter(job =>
                filters.officeTypes.includes(job.job_is_remote ? 'REMOTE' : 'IN_OFFICE')
            );
        }

        if (filters.country) {
            const countryFilter = countryAbbreviations[filters.country.toUpperCase()] || [filters.country.toUpperCase()];
            updatedJobs = updatedJobs.filter(job =>
                countryFilter.includes(job.job_country.toUpperCase())
            );
        }

        if (filters.experience.length > 0) {
            updatedJobs = updatedJobs.filter(job => {
                const experienceInYears = (job.job_required_experience.required_experience_in_months || 0) / 12;
                return filters.experience.some(range => {
                    if (range.min === 0 && experienceInYears === 0) return true;
                    if (experienceInYears >= range.min && experienceInYears < range.max) return true;
                    return false;
                });
            });
        }

        setFilteredJobs(updatedJobs);
        setSortedByFilters(filters);
    };

    const handleSortIconClick = () => {
        setShowSortedBy(prevShowSortedBy => !prevShowSortedBy); 
    };

    const handleRemoveFilter = (filterType, filterValue) => {
        const updatedFilters = { ...sortedByFilters };

        switch (filterType) {
            case 'workTypes':
                updatedFilters.workTypes = updatedFilters.workTypes.filter(type => type !== filterValue);
                break;
            case 'officeTypes':
                updatedFilters.officeTypes = updatedFilters.officeTypes.filter(type => type !== filterValue);
                break;
            case 'country':
                updatedFilters.country = null;
                break;
            case 'experience':
                updatedFilters.experience = updatedFilters.experience.filter(range =>
                    !(range.min === filterValue.min && range.max === filterValue.max)
                );
                break;
            default:
                break;
        }

        applyFilters(updatedFilters); 
    };

    const handleOverlayClick = (event) => {
        if (event.target.className === 'modal-overlay') {
            setShowSortedBy(false);
        }
    };

    const handleJobClick = (job) => {
        setSelectedJob(job);  // Set the selected job
    };

    const handleCloseJobApplication = () => {
        setSelectedJob(null);  // Close job application
    };

    return (
        <div className="mainjoblistdisplay">
            <Filter onApplyFilters={applyFilters} selectedFilters={sortedByFilters} onRemoveFilter={handleRemoveFilter} />
            
            <div>
                <div className="Card_header">
                    <div className="card_header_one">
                        <span className="card_query">Query</span>
                        <span>345</span>
                    </div>
                    <div className="sorted_by">
                        <span>Sort by: Last Updated</span>
                        <svg
                            id="sort_icon"
                            className="sorted_icon"
                            height="15px"
                            width="15px"
                            viewBox="0 0 18 18"
                            xmlns="http://www.w3.org/2000/svg"
                            onClick={handleSortIconClick}  
                        >
                            <g id="Layer_1-2" data-name="Layer 1">
                                <g>
                                    <polygon points="6 0 6 8 4 8 4 5 0 5 0 3 4 3 4 0 6 0"/>
                                    <rect x="8" y="3" width="10" height="2"/>
                                    <rect x="0" y="13" width="10" height="2"/>
                                    <polygon points="12 10 14 10 14 13 18 13 18 15 14 15 14 18 12 18 12 10"/>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
                {showSortedBy && 
                    <div className="modal-overlay" onClick={handleOverlayClick}>
                        <SortedBy filters={sortedByFilters} onRemoveFilter={handleRemoveFilter} onClose={() => setShowSortedBy(false)} />
                    </div>
                }

                <div className="displayOfCard">
                    {filteredJobs.map(job => (
                        <Card 
                            key={job.job_id}
                            jobTitle={job.job_title}
                            companyName={job.employer_name}
                            jobEmploymentType={job.job_employment_type}
                            jobMinSalary={job.job_min_salary}
                            jobMaxSalary={job.job_max_salary}
                            jobSalaryCurrency={job.job_salary_currency}
                            jobSalaryPeriod={job.job_salary_period}
                            jobCity={job.job_city}
                            jobState={job.job_state}
                            jobCountry={job.job_country}
                            onDetailsClick={() => handleJobClick(job)}  // Pass handleJobClick function
                        />
                    ))}
                </div>
            </div>
            {selectedJob && (
                <JobApplication 
                    jobDescription={selectedJob.job_description} 
                    jobApplyLink={selectedJob.job_apply_link}  // Pass jobApplyLink prop
                    onClose={handleCloseJobApplication} 
                />
            )}
        </div>
    );
}

export default Joblist;
