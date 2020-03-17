import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Posts from './Posts';
import Photos from './Photos';
import Home from './Home';

const Content = (user) => {
    return (
        <div className="card shadow">
            <div className="row justify-content-center my-3">
                <ul className="nav">
                    <li className="nav-item"><p className="nav-link m-0"><strong>{user.username}</strong></p></li>
                    <li className="nav-item"><Link className='nav-link' to={`/${user.username}/posts`}>Posts</Link></li>
                    <li className="nav-item"><Link className='nav-link' to={`/${user.username}/photos`}>Photos</Link></li>
                </ul>
            </div>
            <div>
                <Switch>
                    <Route exact path={`/${user.username}`} component={Home} />
                    <Route path={`/${user.username}/posts`} render={() => <Posts id={user.userId} />} />
                    <Route path={`/${user.username}/photos`} render={() => <Photos id={user.userId} />} />
                </Switch>
            </div>
        </div>
    );
}

export default Content;