import React from "react";
import Joblist from '../Extras/Joblist';
import '../Styles/FindJob.css';


function FindJob({jobs}){
 
    
    return (
        <div className="findjob-container">
            <Joblist jobs={jobs} />
        </div>
    );
}

export default FindJob;