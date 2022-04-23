import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserByUsername } from '../utils/api';
import Error from '../sub-components/Error';

const ProfileByUsername = () => {
    const {username} = useParams();
    const [ userPageProfile, setUserPageProfile ] = useState({});
    const [ error, setError ] = useState(null);

    useEffect(() => {
        getUserByUsername(username).then((response) => {
            
            setUserPageProfile(response)
            setError(null)
        }).catch((err) => {
            setError({ err });
        })
    }, [username])

    if(error) <Error message='That user does not exist 🤷'/>

    if(!userPageProfile) <p>Loading...</p>

    return (
        <>
        <h1>{username}'s Profile</h1>

        </>
    )
}

export default ProfileByUsername;