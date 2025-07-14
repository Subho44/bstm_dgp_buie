import React from 'react'
import {Link} from "react-router-dom";
const Header = () => {
    return <>
        <div className='header'>
            <h1>Eco-smart City</h1>
        </div>
        <div className='navbar'>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/service">Service</Link>
                </li>
                
               
            </ul>
        </div>
    </>
}

export default Header