import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import './App.css';
import './Nav.css';
import Nav from './Nav';
import FindJob from "./FindJob";
import './FindJob.css';
import Hiring from "./Hiring";
import Bookmark from "./Bookmark";
import Faq from "./Faq";
import Joblist from "./Joblist";

function App() {
    const [jobs, setJobs] = useState([]);

    return (
        <div>
            <Router>
                <div>
                    <Nav setJobs={setJobs} />
                    <Joblist jobs={jobs} />
                    <Routes>
                        <Route path="/FindJob" element={<FindJob />} />
                        <Route path="/Hiring" element={<Hiring />} />
                        <Route path="/Bookmark" element={<Bookmark />} />
                        <Route path="/Faq" element={<Faq />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
