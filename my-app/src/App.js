import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import './Nav.css'
import Nav from './Nav';
import FindJob from "./FindJob";
import Hiring from "./Hiring";
import Bookmark from "./Bookmark";
import Faq from "./Faq";


function App() {
    return(
        <Router>
            
            <div>
                <Nav />
                <Routes >
                    <Route path="/FindJob" element={<FindJob/>} />
                    <Route path="/Hiring" element={<Hiring/>} />
                    <Route path="/Bookmark" element={<Bookmark/>} />
                    <Route path="/Faq" element={<Faq/>} />

                </Routes>
            </div>

        </Router>
    );
}

export default App;
