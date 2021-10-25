import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FeatPosts = () =>
{
    const [featPosts, setFeatPosts] = useState([]);

    useEffect(() =>
    {
        fetch('http://localhost:3000/api/blogPosts')
            .then(res => res.json())
            .then(featPosts => setFeatPosts(featPosts))
    }, []);

    console.log(featPosts);

    return (
        <>
            <div className="container slide-panel">
                <div className="ten columns">
                    {featPosts.map((post, index) => (
                        <div className="slide" key={post.id}>
                            <div className="image">
                                <img src={post.imagelink} alt="" />
                            </div>
                            <div className="textwrap">
                                <div className="text">
                                    <h2>{post.title}</h2>
                                    <h3>by {post.author}</h3>
                                    <p>{post.description}</p>
                                    <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <ul className="panel-buttons">
                    <li><FontAwesomeIcon icon="arrow-left" /></li>
                    <li><FontAwesomeIcon icon="arrow-right" /></li>
                </ul>
            </div>
        </>
    )
}

export default FeatPosts;