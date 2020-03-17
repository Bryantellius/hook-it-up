import React, { useState, useEffect } from 'react';

const Posts = (user) => {
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
        <div>
            {posts.map(post => {
                if (user.id === post.userId) {
                    return (
                        <div key={post.id} className='p-3'>
                            <hr></hr>
                            <h6>{post.title}</h6>
                            <p>{post.body}</p>
                        </div>
                    )
                } else {
                    return null;
                }
            })}
        </div>
    )
}

export default Posts;