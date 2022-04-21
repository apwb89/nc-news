import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/User';
import { Button } from '@mui/material';
import RandomArticleWidget from './RandomArticleWidget';

const NavBar = () => {
    let { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {

    }, [setUser])
    
    if(!user) {
        return (
            <nav>
                <Button variant="text" onClick={() => navigate('/login')}>Log in</Button>
                <Button variant="text" onClick={() => navigate('/topics')}>Topics</Button>
                <Button variant="text" onClick={() => navigate('/articles')}>Articles</Button>
                <Button variant="text" onClick={() => navigate('/users')}>Users</Button>
            </nav>
        )
    } else if (user) {
        return (
            <nav>
                <h1>Logged in as {user}</h1>
                <Button variant="text" onClick={() => navigate('/dashboard')}>Dashboard</Button>
                <Button variant="text" onClick={() => navigate('/topics')}>Topics</Button>
                <Button variant="text" onClick={() => navigate('/articles')}>Articles</Button>
                <Button variant="text" onClick={() => navigate('/users')}>Users</Button>
                <Button variant="text" onClick={() => setUser('')}>Log out</Button>
            </nav>
        )
    }
}

export default NavBar;