import React from 'react';
import { Link } from "react-router-dom";

const Header = () =>
{
    return (
        <>
            <header>
                <div className="header wrapper">
                    <div className="logo">
                        <img src="/images/beIncLogo.png" alt="" />
                    </div>

                    <nav>
                        <ul className="users">
                            <li className="login">Log In</li>
                            <li className="joinus">Join Us</li>
                        </ul>
                        <ul className="nav">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/trials'>Trials</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </nav>

                </div>
            </header>
        </>
    )
}

export default Header;