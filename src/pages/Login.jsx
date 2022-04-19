import { useContext, useState } from 'react';
import { UserContext } from '../contexts/User';
import NavBar from '../sub-components/NavBar';
import { useEffect} from 'react';
import { getUsers } from '../utils/api';
import { Button } from '@mui/material';

const Login = () => {
    const { user, setUser, isLoggedIn } = useContext(UserContext);
    const [ userList, setUserList ] =  useState([]);

    useEffect(() => {
        getUsers().then((response) => {
            setUserList(response);
        })
    }, [setUserList])

    const handleLogin = (event) => {

        // fix 
        //
        //
        //
        //
        //
        console.log(event.target);
        
    }

        return (
            <main>
                <h1>Login</h1>
                <ul>
                    {userList.map(user => {
                        return (
                            <li key={user.username}>{user.username}
                                <Button variant="contained" onClick={handleLogin}>Log in</Button>
                            </li>
                        )
                    })}
                </ul>
            </main>
        )

    }

export default Login;