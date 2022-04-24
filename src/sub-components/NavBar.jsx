import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/User';
import RandomArticleWidget from './RandomArticleWidget';

const NavBar = () => {
    let { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {

    }, [setUser])
    
    if(!user) {
        return (
            <nav>
                <button variant="text" onClick={() => navigate('/login')}>Log in</button>
                <button variant="text" onClick={() => navigate('/topics')}>Topics</button>
                <button variant="text" onClick={() => navigate('/articles')}>Articles</button>
                <button variant="text" onClick={() => navigate('/users')}>Users</button>
            </nav>
        )
    } else if (user) {
        return (
            <nav>
                <h1>Logged in as {user}</h1>
                <button variant="text" onClick={() => navigate('/dashboard')}>Dashboard</button>
                <button variant="text" onClick={() => navigate('/topics')}>Topics</button>
                <button variant="text" onClick={() => navigate('/articles')}>Articles</button>
                <button variant="text" onClick={() => navigate('/users')}>Users</button>
                <button variant="text" onClick={() => setUser('')}>Log out</button>
            </nav>
        )
    }
}

export default NavBar;