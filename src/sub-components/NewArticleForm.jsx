import { useContext } from 'react';
import { UserContext } from '../contexts/User';

const NewArticleForm = () => {
    const { user, setUser } = useContext(UserContext);
    
    return <p>NewArticleForm</p>
}

export default NewArticleForm;