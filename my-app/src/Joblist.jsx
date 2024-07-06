import React from "react";
import Card from "./card";

function Joblist({ jobs }) {
    return (
        <div>
            {jobs.map(job => (
                <Card 
                    key={job.job_id}
                    jobTitle={job.job_title}
                    companyName={job.employer_name}
                    companyLogo={job.employer_logo}
                    jobEmploymentType={job.job_employment_type}
                    jobMinSalary={job.job_min_salary}
                    jobMaxSalary={job.job_max_salary}
                    jobSalaryCurrency={job.job_salary_currency}
                    jobSalaryPeriod={job.job_salary_period}
                    jobCity={job.job_city}
                    jobState={job.job_state}
                    jobCountry={job.job_country}
                />
            ))}
        </div>
    );
}

export default Joblist;
