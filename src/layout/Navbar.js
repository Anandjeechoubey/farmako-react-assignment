import React from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux';

import { logoutUser } from '../store/actions/user';

const Navbar = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <div className="navbar-container">
            <span>Hospital Name</span>
            <ul className="nav-links">
                <li onClick={() => {dispatch(logoutUser()); history.push("/login")}}>Logout</li>
            </ul>
        </div>
    )
}

export default Navbar
