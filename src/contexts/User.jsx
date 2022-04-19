import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
    const [ user, setUser ] = useState('');
    let isLoggedIn = user.username !== undefined;
    
    return (<UserContext.Provider value={{ user, setUser, isLoggedIn }}>
        {props.children}
        </UserContext.Provider>
    )
}