import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import MainContent from './MainContent';

const App = () => {
    return (
        <Router>
            <React.Fragment>
                <header className="jumbotron text-center">
                    <h1>SeaGlass</h1>
                </header>
                <MainContent />
            </React.Fragment>
            <Switch>
                <Route exact path='/'></Route>
                <Route path='/second'></Route>
                <Route path='/third'></Route>
            </Switch>
        </Router>
        );
}

export default App;