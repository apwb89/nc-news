import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById, voteArticle } from '../utils/api';
import CommentsByArticlePanel from '../sub-components/CommentsByArticlePanel';
import Error from '../sub-components/Error';
import { Button } from '@mui/material'


const IndividualArticle = () => {
    const [ article, setArticle ] = useState({});
    const [error, setError] = useState(null);
    const [ hasVoted, setHasVoted ] = useState(false);
    const [ voteChange, setVoteChange ] = useState(0);
    
    const { article_id } = useParams();

    useEffect(() => {
        getArticleById(article_id).then((response) => {
            setArticle(response);
            setError(null)
        }).catch((err) => {
            setError({ err });
        })
    }, [article_id])

    const handleVote = (vote) => {
        if(hasVoted) {
            alert('You have already voted on this article');
        } else {
            setVoteChange(vote);
            setHasVoted(true);

            voteArticle(vote, article_id).then((response) => {
                
            }).catch((err) => {
                alert(`Vote failed on ${article.title}`)
                setHasVoted(false);
            })
        }
    }

    if(error) {
        return <Error message={'That article does not exist 🤷'} />
    }

    return (
        <>
        <h6>{article.topic}</h6><h6>Created at: {article.created_at}</h6>
        <h1>{article.title}</h1>
        <h3>By {article.author}</h3>
        <h3>Votes: {article.votes + voteChange}</h3>
        <Button onClick={() => handleVote(1)}>&uarr;</Button>
        <Button onClick={() => handleVote(-1)}>&darr;</Button>
        <h2>{article.body}</h2>
        <h6>Comments :{article.comment_count}</h6>
        <CommentsByArticlePanel article_id={article_id} />
        </>
    )
}

export default IndividualArticle;