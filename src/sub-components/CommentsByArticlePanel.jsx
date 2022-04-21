import { useState, useEffect } from 'react';
import { getArticleComments } from '../utils/api';
import NewCommentForm from './NewCommentForm';

const CommentsByArticlePanel = ({article_id}) => {
    const [ articleComments, setArticleComments ] = useState([]);
    useEffect(() => {
        getArticleComments(article_id).then((response) => {
            console.log(response, 'allcommentsgetresponse')
            setArticleComments(response)
        })
    }, [article_id])

    return (
        <>
        <h3>Comments</h3>
        <NewCommentForm article_id={article_id} articleComments={articleComments} setArticleComments={setArticleComments}/>
        <ul>
            {articleComments.map((comment) => {
                return (
                    <li key={comment.comment_id}>
                        <p>Created at: {comment.created_at}</p>
                        <h4>{comment.body}</h4>
                        <h6>Votes: {comment.votes}</h6><h6>By: {comment.author}</h6>
                    </li>
                )
            })}
        </ul>
        </>
    )
}

export default CommentsByArticlePanel;