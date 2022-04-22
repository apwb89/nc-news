import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { getUsers } from '../utils/api';

const UsersList = () => {
    const [ users, setUsers ] = useState([])
    
    useEffect(() => {
        getUsers().then((response) => {
            setUsers(response)
        })
    }, [])

    if(!users) <p>Loading...</p>

    return (
        <ul>
            {users.map(user => {
               return <Link to={`/users/${user.username}`}><li key={user.username}>{user.username}</li></Link>
            })}
        </ul>
    )
}

export default UsersList;