import React from 'react';
import Users from './Users';
import Posts from './Posts';

const MainContent = () => {
    return (
        <React.Fragment>
            <div className="row">
                <Users />
                <Posts />
            </div>
        </React.Fragment>
    );
}

export default MainContent;