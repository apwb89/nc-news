import { useContext } from 'react';
import { UserContext } from '../contexts/User';

const NewCommentForm = () => {
    const { user, setUser } = useContext(UserContext);
    
    return <p>NewCommentForm</p>
}

export default NewCommentForm;