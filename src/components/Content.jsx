import React, { useState, useEffect } from 'react';
import Posts from './Posts';

const Content = (user, id) => {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        let res = await fetch('https://jsonplaceholder.typicode.com/posts')
        let posts = await res.json();
        setPosts(posts);
    }

    useEffect(() => {
        getPosts();
    }, [])

    return (
        <div className="card">
            <div className="row justify-content-center">
                <ul className="nav">
                    <li className="nav-item"><p className="nav-link">{user.name}</p></li>
                    <li className="nav-item"><button className='btn' to='/posts'>Posts</button></li>
                    <li className="nav-item"><button className='btn' to='/photos'>Photos</button></li>
                </ul>
            </div>
            <div>
                {posts.map(post => (
                    <div key={post.id} className='p-3'>
                        <hr></hr>
                        <h6>{post.title}</h6>
                        <p>{post.body}</p>
                    </div>)
                )}
            </div>
        </div>
    );
}

export default Content;