import { useContext } from 'react';
import { UserContext } from '../contexts/User';

const NavBar = () => {
    const { user, setUser } = useContext(UserContext);
    
    return <p>navbar</p>
}

export default NavBar;