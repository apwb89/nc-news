import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = (props) => {
    let [ user, setUser ] = useState('');
    const isLoggedIn = user.username !== undefined;
    
    return (<UserContext.Provider value={{ user, setUser, isLoggedIn }}>
        {props.children}
        </UserContext.Provider>
    )
}