import  { getArticles } from '../utils/api'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Expandable from './Expandable';

const ArticlesPanel = ({topicQuery}) => {
    const [ articles, setArticles ] = useState([]);
   
    useEffect(() => {
            getArticles(topicQuery).then((response) => {
                setArticles(response);
            })
        }, [articles, topicQuery])
   
    return (
        <main>
            <ul>
                {articles.map(article => {
                   return (
                        <li key={article.article_id}>
                            <h6>{article.topic}</h6>
                            <Link to={`/articles/${article.article_id}`}>
                            <h3>{article.title}</h3>
                            </Link>
                            <Expandable>
                                <h4>{article.body}</h4>
                            </Expandable>
                            <h6>Author: {article.author}</h6><h6>Comments: {article.comment_count}</h6><h6>Votes: {article.votes}</h6>
                        </li>
                   ) 
                })}
            </ul>
        </main>
    )
}

export default ArticlesPanel;