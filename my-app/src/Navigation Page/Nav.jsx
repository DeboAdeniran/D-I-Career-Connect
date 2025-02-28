import React, { useEffect, useState } from 'react';
import logo from '../SVG Files/D&I white logo.svg';
import settin from '../SVG Files/settings_icon.svg';
import notif from '../SVG Files/notif_icon.svg';
import { Link } from "react-router-dom";

function Nav({ setJobs }) {
    const [query, setQuery] = useState("");

    useEffect(() => {
        // Fetch random jobs initially
        fetchRandomJobs();
    }, []);

    const fetchRandomJobs = () => {
        const url = 'https://jsearch.p.rapidapi.com/search?query=random&page=1&num_pages=5&date_posted=all'; // Example URL for fetching random jobs
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '6259e482e8msh660f33611f543dcp123727jsna812c36d2fc3',
                'x-rapidapi-host': 'jsearch.p.rapidapi.com'
            }
        };

        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                setJobs(data.data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    const onChangeHandler = (e) => {
        setQuery(e.target.value);
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        fetchJobs(query);
    };

    const fetchJobs = (query) => {
        const url = `https://jsearch.p.rapidapi.com/search?query=${query}&page=1&num_pages=1&date_posted=all`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '6259e482e8msh660f33611f543dcp123727jsna812c36d2fc3',
                'x-rapidapi-host': 'jsearch.p.rapidapi.com'
            }
        };

        fetch(url, options)
            .then(response => response.json())
            .then(data => {
                setJobs(data.data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className='navbar'>
            <ul className='first_mid'>
                <li><img src={logo} alt="" height="30" width="30" /></li>
            </ul>
            <ul className='mid_nav'>
                <li>
                    <Link to="/FindJob" className="Link">Find job</Link>
                </li>
                <li>
                    <Link to="/Hiring" className="Link">Hiring</Link>
                </li>
                <li>
                    <Link to="/Bookmark" className="Link">Bookmark</Link>
                </li>
                <li>
                    <Link to="/Faq" className="Link">FAQ</Link>
                </li>
            </ul>

            <div className='semi_function'>
                <form onSubmit={onSubmitHandler}>
                    <input
                        type="text"
                        placeholder="Search.."
                        id='myInput'
                        value={query}
                        onChange={onChangeHandler}
                    />
                    <button className='search' type='submit'>Search</button>
                </form>
            </div>

            <ul className='last_mid'>
                <img className='navIconBtn' src={settin} alt="" />
                <img className='navIconBtn' src={notif} alt="" />
            </ul>
        </div>
    );
}

export default Nav;
