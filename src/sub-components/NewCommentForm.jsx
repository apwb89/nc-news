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

        if (!commentBodyForm) {
            alert('Comment cannot be empty')
            return null
        }

        setArticleComments((currComments) => {
            const comment = {}
            comment.author = user
            comment.body = commentBodyForm;
            comment.created_at = new Date().toString();
            comment.votes = 0;
            comment.comment_id = currComments.length + 1;
            console.log(comment, 'comment obj')
            const commentsArr = [...currComments]
            commentsArr.unshift(comment)
            return commentsArr;
        })
        
        const postObj = {};
        postObj.body = commentBodyForm;
        postObj.name = user;
        console.log(postObj, 'postObj')
        postComment(article_id, postObj).then((response) => {
            console.log(response, 'post request response')
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