import React from 'react';
import { Link } from "react-router-dom";

const SubHeader = () =>
{
    return (
        <>
            <header>
                <div className="subheader wrapper">
                    <div className="logo">
                        <img src="/images/footerlogo.png" alt="" />
                    </div>

                    <nav>
                        <ul className="users">
                            <li className="login">Log In</li>
                            <li className="joinus">Join Us</li>
                        </ul>
                        <ul className="nav">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/trials'>Resources</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                        </ul>
                    </nav>

                </div>
            </header>
        </>
    )
}

export default SubHeader;