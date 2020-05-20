import React from 'react';
import logo from '../../../src/logo.png';
import {NavLink} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <img src={logo} width="30" height="30" class="d-inline-block align-top" alt="" loading="lazy" />
            <div className="nav">
            <NavLink className="navbar-brand" activeClassName="disable" to="/">Animal Crossing DevF</NavLink>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    <NavLink className="nav-link" activeClassName="disable" to="/">Opcion 1</NavLink>
                    </li>
                    <li className="nav-item">
                    <NavLink className="nav-link" activeClassName="disable" to="/">Opcion 2</NavLink>
                    </li>
                </ul>
                <NavLink className="nav-link" activeClassName="disable" to="/add-user">Create Account</NavLink>
                <NavLink className="nav-link" activeClassName="disable" to="/login">Login</NavLink>
            </div>
        </nav>

    );
}

export default Navbar;
