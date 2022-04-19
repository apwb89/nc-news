import  { getArticles } from '../utils/api'
import { useState, useEffect } from 'react';

const ArticlesPanel = () => {
    const [ articles, setArticles ] = useState([]);

    useEffect(() => {
        getArticles().then((response) => {
            setArticles(response)
        })
    }, [setArticles])

    return (
        <main>
            <ul>
                {articles.map(article => {
                   return (
                        <li key={article.article_id}>
                            <h6>{article.topic}</h6>
                            <h3>{article.title}</h3>
                            <h4>{article.body}</h4>
                            <h6>Author: {article.author}</h6><h6>Comments: {article.comment_count}</h6><h6>Votes: {article.votes}</h6>
                        </li>
                   ) 
                })}
            </ul>
        </main>
    )
}

export default ArticlesPanel;