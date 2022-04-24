import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserByUsername } from '../utils/api';
import Error from '../sub-components/Error';
import ArticlesPanel from '../sub-components/ArticlesPanel';

const ProfileByUsername = () => {
    const {username} = useParams();
    const [ userPageProfile, setUserPageProfile ] = useState({});
    const [ error, setError ] = useState(null);

    useEffect(() => {
        getUserByUsername(username).then((response) => {
            if(!response.avatar_url) {
                response.avatar_url = '../imgs/avatar_placeholder';
            }
            setUserPageProfile(response)
            setError(null)
        }).catch((err) => {
            setError({ err });
        })
    }, [username])

    if(error) <Error message='That user does not exist 🤷'/>

    if(!userPageProfile) <p>Loading...</p>

    return (
        <main className='background'>
        <h1>{username}'s Profile</h1>
        <img src={userPageProfile.avatar_url} alt={userPageProfile.username}/>
        <h4>Articles by {username}</h4>
        <ArticlesPanel author={username} />
        </main>
    )
}

export default ProfileByUsername;