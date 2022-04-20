import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/User';
import { Button } from '@mui/material';
import RandomArticleWidget from './RandomArticleWidget';

const NavBar = () => {
    const { user, setUser, isLoggedIn } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {

    }, [])
    
    const handleLogout = () => {

    }
    
    if(!isLoggedIn) {
        return (
            <nav>
                <Button variant="text" onClick={() => navigate('/login')}>Log in</Button>
                <Button variant="text" onClick={() => navigate('/topics')}>Topics</Button>
                <Button variant="text" onClick={() => navigate('/articles')}>Articles</Button>
                <Button variant="text" onClick={() => navigate('/users')}>Users</Button>
            </nav>
        )
    } else if (isLoggedIn) {
        return (
            <nav>
                <p>Logged in as {user}</p>
                <Button variant="text" onClick={() => navigate('/dashboard')}>Dashboard</Button>
                <Button variant="text" onClick={() => navigate('/topics')}>Topics</Button>
                <Button variant="text" onClick={() => navigate('/articles')}>Articles</Button>
                <Button variant="text" onClick={() => navigate('/users')}>Users</Button>
                <Button variant="text" onClick={handleLogout}>Log out</Button>
            </nav>
        )
    }
}

export default NavBar;