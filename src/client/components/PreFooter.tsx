import React from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PreFooter = () =>
{
    return (
        <>
            <div className="container foot">
                <div className="ten columns">
                    <div className="sponsors">
                        <h1>Brought to you by</h1>
                        <div className="images">
                            <img className="prosper" src="/images/prosper2.png" alt="" />
                            <img className="uab" src="/images/uab2.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className="ten columns">
                    <div className="splash">
                        <div className="image">
                            <img src="/images/footsplash.png" alt="" />
                        </div>
                        <div className="text">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sodales dignissim hendrerit. Donec molestie justo id nisl varius, quis tristique eros placerat</p>
                            <a href="">call to action</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PreFooter;









