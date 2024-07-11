import React, { useEffect, useRef } from 'react';
import '../Styles/jobapplication.css';

function JobApplication({ jobDescription, jobApplyLink, onClose }) {
    const cardRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cardRef.current && !cardRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [onClose]);

    return (
        <div className="job-application-overlay">
            <div className="job-application-card" ref={cardRef}>
                <button onClick={onClose}>Close</button>
                <h2>Job Description</h2>
                <p>{jobDescription}</p>
                <a href={jobApplyLink} target="_blank" rel="noopener noreferrer">
                    <button>Apply Now</button>
                </a>
            </div>
        </div>
    );
}

export default JobApplication;
