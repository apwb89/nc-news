import { useContext } from 'react';
import { UserContext } from '../contexts/User';

const Dashboard = () => {
    const { user, setUser } = useContext(UserContext);
    
    return <p>Dashboard Page</p>
}

export default Dashboard;