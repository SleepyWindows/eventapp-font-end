import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <h1>NavBar</h1>
            <NavLink to="/login' exact>Login</NavLink>
        </div>
    );
}
 
export default NavBar;
