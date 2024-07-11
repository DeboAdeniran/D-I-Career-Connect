import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import './Styles/App.css';
import './Styles/Nav.css';
import Nav from './Navigation Page/Nav';
import FindJob from "./Navigation Page/FindJob";
import './Styles/FindJob.css';
import Hiring from "./Navigation Page/Hiring";
import Bookmark from "./Navigation Page/Bookmark";
import Faq from "./Navigation Page/Faq";
import SortedBy from "./Extras/sortedBy";

function App() {
    const [jobs, setJobs] = useState([]);
   
    
    return (
        <div>
            <Router>
                
                    <Nav setJobs={setJobs} />
                    <Routes>
                        <Route path="/FindJob" element={<FindJob jobs={jobs}/>} />
                        <Route path="/Hiring" element={<Hiring />} />
                        <Route path="/Bookmark" element={<Bookmark />} />
                        <Route path="/Faq" element={<Faq />} />
                    </Routes>
                
            </Router>
            {/* <SortedBy /> */}
        </div>
    );
}

export default App;
