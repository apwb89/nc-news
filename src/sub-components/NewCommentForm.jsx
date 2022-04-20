import { useState, useContext } from 'react';
import { UserContext } from '../contexts/User';
import { Button } from '@mui/material'; 
import { useNavigate } from 'react-router-dom';
import { postComment } from '../utils/api';


const NewCommentForm = ({article_id, articleComments, setArticleComments}) => {
    let { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [ commentBodyForm, setCommentBodyForm ] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setArticleComments((currComments) => {
            return [ postObj, ...currComments];
        })
        const postObj = {};
        postObj.body = commentBodyForm;
        postObj.name = user;
        
        postComment(article_id, postObj).then((response) => {
            setArticleComments(response);
        });
        setCommentBodyForm('')
    }
    
    if (!user) {
        return <Button type="contained" onClick={() => navigate('/login')}>Login to comment</Button>
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Add new comment...
                <input value={commentBodyForm} onChange={(event) => setCommentBodyForm(event.target.value)}/>
            </label>
            <Button type='submit'>Add Comment</Button>
        </form>
    )
}

export default NewCommentForm;