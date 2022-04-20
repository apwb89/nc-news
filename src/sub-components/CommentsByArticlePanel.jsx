import { useState, useEffect } from 'react';
import { getArticleComments } from '../utils/api';

const CommentsByArticlePanel = ({article_id}) => {
    const [ articleComments, setArticleComments ] = useState([]);

    useEffect(() => {
        getArticleComments(article_id).then((response) => {
            setArticleComments(response)
        })
    }, [article_id])

    return (
        <>
        <h3>Comments</h3>
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