import React from 'react';
import logo from './D&I white logo.svg';
import settin from './settings_icon.svg';
import notif from './notif_icon.svg';
import { Link } from "react-router-dom";

function Nav(){

    return(
        <div className='navbar'>
            <ul className='first_mid'>
                <li><img src={logo} alt="" height="30" width="30"/></li>
                <li>D&I</li>
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

            <ul className='last_mid'>
                <li><img src={settin} alt="" /></li>
                <li><img src={notif} alt="" /></li>
            </ul>
        </div>
    );

}

export default Nav;