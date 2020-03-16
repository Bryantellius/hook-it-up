import React, {useState, useEffect} from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        let res = await fetch('https://jsonplaceholder.typicode.com/users');
        let users = await res.json();
        setUsers(users);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="col-md-4 justify-content-center" id='users'>
            <div className="card">
                <div className="card-body">
                    {users.map(user => (
                        <h5 key={user.id}>{user.username}</h5>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Users;