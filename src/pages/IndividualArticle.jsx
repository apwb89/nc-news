import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById } from '../utils/api';
import CommentsByArticlePanel from '../sub-components/CommentsByArticlePanel';
import Error from '../sub-components/Error';

const IndividualArticle = () => {
    const [ article, setArticle ] = useState({});
    const [error, setError] = useState(null);
    
    const { article_id } = useParams();

    useEffect(() => {
        getArticleById(article_id).then((response) => {
            setArticle(response);
            setError(null)
        }).catch((err) => {
            setError({ err });
        })
    }, [article_id, article])

    if(error) {
        return <Error message={'That article does not exist 🤷'} />
    }

    return (
        <>
        <h6>{article.topic}</h6><h6>Created at: {article.created_at}</h6>
        <h1>{article.title}</h1>
        <h3>By {article.author}</h3><h3>Votes: {article.votes}</h3>
        <h2>{article.body}</h2>
        <h6>Comments :{article.comment_count}</h6>
        <CommentsByArticlePanel article_id={article_id} />
        </>
    )
}

export default IndividualArticle;