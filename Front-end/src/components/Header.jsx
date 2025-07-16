import React from 'react'
import {Link} from "react-router-dom";
const Header = () => {
    return <>
        <div className='container-fluid bg-dark text-light text-center'>
            <h1>Eco-smart City</h1>
        </div>
        <div className='container-fluid'>
            <ul className='nav float-right'>
                <li className='nav-item'>
                    <Link to="/" className='nav-link'>Home</Link>
                </li>
                <li>
                    <Link to="/about"  className='nav-link' >About</Link>
                </li>
                <li>
                    <Link to="/contact"  className='nav-link'>Contact</Link>
                </li>
                <li>
                    <Link to="/service"  className='nav-link'>Service</Link>
                </li>
                
               
            </ul>
        </div>
    </>
}

export default Header