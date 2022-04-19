import { useContext } from 'react';
import { UserContext } from '../contexts/User';

const Login = () => {
    const { user, setUser } = useContext(UserContext);

    return <p>Login Page</p>
}

export default Login;