import { useContext, useState } from 'react';
import { UserContext } from '../contexts/User';
import { useEffect} from 'react';
import { getUsers } from '../utils/api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    let { setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [ userList, setUserList ] =  useState([]);

    useEffect(() => {
        getUsers().then((response) => {
            setUserList(response);
        })
    }, [setUserList])

    const handleLogin = (username) => {
        setUser(username);
        navigate('/dashboard');
    }

        return (
            <main className='background'>
                <h1>Login</h1>
                <ul>
                    {userList.map(user => {
                        return (
                            <li key={user.username}>{user.username}
                                <button variant="contained" onClick={() => handleLogin(user.username)}>Log in</button>
                            </li>
                        )
                    })}
                </ul>
            </main>
        )

    }

export default Login;