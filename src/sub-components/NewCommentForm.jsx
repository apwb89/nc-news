import { useState, useContext } from 'react';
import { UserContext } from '../contexts/User';
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
            comment.comment_id = 0;
            const commentsArr = [...currComments]
            commentsArr.unshift(comment)
            return commentsArr;
        })
        
        const postObj = {};
        postObj.body = commentBodyForm;
        postObj.name = user;
        postComment(article_id, postObj).then((response) => {
            
        });
        setCommentBodyForm('')
    }
    
    if (!user) {
        return <button type="contained" onClick={() => navigate('/login')}>Login to comment</button>
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Add new comment...
                <input value={commentBodyForm} onChange={(event) => setCommentBodyForm(event.target.value)}/>
            </label>
            <button type='submit'>Add Comment</button>
        </form>
    )
}

export default NewCommentForm;