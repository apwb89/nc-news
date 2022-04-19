import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    return (
        <section>
            <h1>Home Page</h1>
            <img src='../logoipsum-logo-57.svg' alt='Website Logo'/>
            <Button onClick={navigate('/topics')} variant="contained">Browse</Button>
            <Button onClick={navigate('/login')} variant="contained">Login</Button>
        </section>
    )
}

export default Home;