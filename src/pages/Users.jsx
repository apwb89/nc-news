import { useContext } from 'react';
import { UserContext } from '../contexts/User';

const Users = () => {
    const { user, setUser } = useContext(UserContext);
    
    return <p>Users Page</p>
}

export default Users;