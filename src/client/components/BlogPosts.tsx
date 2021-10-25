import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BlogPosts = () =>
{
    const [blogPosts, setBlogPosts] = useState([]);

    useEffect(() =>
    {
        fetch('http://localhost:3000/api/blogPosts')
            .then(res => res.json())
            .then(blogPosts => setBlogPosts(blogPosts))
    }, []);

    console.log(blogPosts);

    return (
        <>
            <div className="container featwrap">
                {blogPosts.map((post, index) => (
                    <div className="third columns" key={post.id}>
                        <div className="views">
                            <div className="image">
                                <img src={post.imagelink} alt="" />
                            </div>
                            <div className="text">
                                <h2>{post.title}</h2>
                                <p>{post.description}</p>
                                <Link to="">Read More <FontAwesomeIcon icon="arrow-right" /></Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default BlogPosts;