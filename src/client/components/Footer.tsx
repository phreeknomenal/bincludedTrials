import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

/* COMPONENT IMPORTS */
import PreFooter from '../components/PreFooter';

const Footer = () =>
{
    return (
        <>
            <footer>
                {/* <PreFooter /> */}

                <div className="container footer">
                    <div className="eight columns offset-by-one">
                        <div className="container">
                            <div className="two columns">
                                <div className="footLogo">
                                    <Link to="/">
                                        <img src="/images/footerlogo.png" alt="" />
                                    </Link>
                                    <p>This web application was built with <FontAwesomeIcon icon="heart" /> and <FontAwesomeIcon icon="coffee" /> by Acclinate, Inc. in the greatest city, Birmingham, AL!</p>
                                    <FontAwesomeIcon icon={['fab', 'html5']} />
                                    <FontAwesomeIcon icon={['fab', 'css3-alt']} />
                                    <FontAwesomeIcon icon={['fab', 'js-square']} />
                                    <FontAwesomeIcon icon={['fab', 'node-js']} />
                                    <FontAwesomeIcon icon={['fab', 'react']} />
                                    <FontAwesomeIcon icon={['fab', 'font-awesome-flag']} />
                                    <FontAwesomeIcon icon={['fab', 'slack']} />
                                    <FontAwesomeIcon icon={['fab', 'git']} />
                                </div>
                            </div>
                            <div className="two columns social">
                                <h1>Follow Us!</h1>
                                <Link className="iconFace" to={{ pathname: "https://facebook.com" }} target="_blank">
                                    <FontAwesomeIcon icon={['fab', 'facebook']} />
                                </Link>
                                <Link className="iconTwit" to={{ pathname: "https://twitter.com" }} target="_blank">
                                    <FontAwesomeIcon icon={['fab', 'twitter']} />
                                </Link>
                                <Link className="iconTube" to={{ pathname: "https://youtube.com" }} target="_blank">
                                    <FontAwesomeIcon icon={['fab', 'youtube']} />
                                </Link>
                                <Link className="iconLink" to={{ pathname: "https://linkedin.com" }} target="_blank">
                                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                                </Link>
                                <Link className="iconDisc" to={{ pathname: "https://discord.com" }} target="_blank">
                                    <FontAwesomeIcon icon={['fab', 'discord']} />
                                </Link>
                            </div>
                            <div className="six columns">
                                <h1>Sitemap</h1>
                                <ul className="sitemap">
                                    <li>
                                        <Link to="/" >
                                            <FontAwesomeIcon icon="home" />
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/recipes">
                                            <FontAwesomeIcon icon="question-circle" />
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/submit">
                                            <FontAwesomeIcon icon="edit" />
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/about" >
                                            <FontAwesomeIcon icon="tools" />
                                            Resource
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/contact">
                                            <FontAwesomeIcon icon="address-book" />
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="ten columns footEnd">
                                <p>© 2021 #BINCLUDED. All rights reserved. | Privacy Policy | Data Breach Policy</p>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer;