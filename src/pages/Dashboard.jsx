import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/User';
import ArticlesPanel from '../sub-components/ArticlesPanel';
import NewArticleForm from '../sub-components/NewArticleForm';
import { getUserByUsername } from '../utils/api';

const Dashboard = () => {
    const { user, setUser } = useContext(UserContext);
    const [ yourProfile, setYourProfile ] = useState({});
    const navigate = useNavigate();
    
    if(!user) navigate('/login');

    useEffect(() => {
        getUserByUsername(user).then((response) => {
            setYourProfile(response)
        })
    }, [user])


    return (
        <>
        <h1>Welcome back {user}</h1>
        <img src={yourProfile.avatar_url} alt={yourProfile.username} height='200px'/>
        <h5>Post New Article</h5>
        <NewArticleForm />
        <h2>Your Articles</h2>
        <ArticlesPanel author={yourProfile.username} />
        </>
    )
}

export default Dashboard;