import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar-container">
            <span>Hospital Name</span>
            <ul className="nav-links">
                <Link to="/login"><li>Logout</li></Link>
            </ul>
        </div>
    )
}

export default Navbar
