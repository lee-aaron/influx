import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';


const Header = ({ ...props }) => {
    return (
        <div className="header">
            <div className="account-info">
                <Link className="" to="">
                    Company
                </Link>
                <Link className="" to="">
                    Contact Us
                </Link>
                <Link className="" to="/account">
                    Login
                </Link>
            </div>
            <div className="nav-bar">
                <div className="icon">
                    <Link className="link" to="/">
                        Logo
                    </Link>
                </div>
                <Link className="router-link" to="">
                    Products
                </Link>
                <Link className="router-link" to="">
                    Pricing
                </Link>
                <Link className="router-link" to="">
                    Resources
                </Link>
                <Link className="router-link" to="">
                    Get Started
                </Link>
            </div>
        </div>
    )
}

export default Header;