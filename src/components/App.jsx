import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Content from './Content';
import Home from './Home';


const App = () => {
    const [users, setUser] = useState([]);

    const getUsers = async () => {
        let res = await fetch('https://jsonplaceholder.typicode.com/users')
        let users = await res.json();
        setUser(users);
    }

    useEffect(() => {
        getUsers();
    }, [])

    return (
        <Router>
            <React.Fragment>
                <header className="text-center bg-light rounded shadow">
                    <h1><Link to='/' className='nav-link text-dark'>Colloquium</Link></h1>
                </header>
                <div className="row">
                    <div className="col-md-4">
                        <div className="card shadow">
                            <ul className="nav">
                                <li className="nav-item">
                                    {users.map(user => (<Link className='nav-link' key={user.id} to={`/${user.username}`}>{user.username}</Link>))}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <Switch>
                            <Route exact path='/' component={Home}/>
                            {users.map(user => (<Route key={user.id} path={`/${user.username}`} render={() => <Content username={user.username} userId={user.id}/>}/>))}
                        </Switch>
                    </div>
                </div>

            </React.Fragment>
        </Router>
    );
}

export default App;