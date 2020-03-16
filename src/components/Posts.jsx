import React, { useState, useEffect } from 'react';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    const getPosts = async () => {
        let res = await fetch('https://jsonplaceholder.typicode.com/posts');
        let posts = await res.json();
        setPosts(posts);
    }

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <div className="col-md-8 justify-content-center" id='posts'>
            <div className="card p-3">
                {posts.map(post => (
                    <React.Fragment key={post.id}>
                        <h5 className="card-title">
                            {post.title}
                        </h5>
                        <p className="card-body">
                            {post.body}
                        </p>
                        <hr></hr>
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}

export default Posts;