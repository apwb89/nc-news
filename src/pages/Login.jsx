import { useContext, useState } from 'react';
import { UserContext } from '../contexts/User';
import { useEffect} from 'react';
import { getUsers } from '../utils/api';
import { Button } from '@mui/material';

const Login = () => {
    let { user, setUser } = useContext(UserContext);
    const [ userList, setUserList ] =  useState([]);

    useEffect(() => {
        getUsers().then((response) => {
            setUserList(response);
        })
    }, [setUserList])

    const handleLogin = (username) => {
        setUser(username);
    }

        return (
            <main>
                <h1>Login</h1>
                <ul>
                    {userList.map(user => {
                        return (
                            <li key={user.username}>{user.username}
                                <Button variant="contained" onClick={() => handleLogin(user.username)}>Log in</Button>
                            </li>
                        )
                    })}
                </ul>
            </main>
        )

    }

export default Login;