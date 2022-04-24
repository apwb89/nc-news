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
        <section className='Users'>
        <ul>
            {users.map(user => {
               return <Link key={user.username} to={`/users/${user.username}`}><li >{user.username}</li></Link>
            })}
        </ul>
        </section>
    )
}

export default UsersList;