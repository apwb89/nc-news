import  { getArticles } from '../utils/api'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Expandable from './Expandable';
import DeleteArticleButton from './DeleteArticleButton';

const ArticlesPanel = ({topicQuery, author}) => {
    const [ articles, setArticles ] = useState([]);
   
    useEffect(() => {
            getArticles(topicQuery, author).then((response) => {
                setArticles(response);
            })
        }, [articles, topicQuery, author])
   
    return (
        <main>
            <ul>
                {articles.map(article => {
                   return (
                       <section className='articles-list-element' key={article.article_id}>
                        <li>
                            <h6>{article.topic}</h6>
                            <Link to={`/articles/${article.article_id}`}>
                            <h3>{article.title}</h3>
                            </Link>
                            <Expandable>
                                <h4>{article.body}</h4>
                            </Expandable>
                            <Link to={`/users/${article.author}`}><h6>Author: {article.author}</h6></Link><h6>Comments: {article.comment_count}</h6><h6>Votes: {article.votes}</h6>
                            <DeleteArticleButton setArticles={setArticles} author={author} article_id={article.article_id}/>
                        </li>
                        </section>
                   ) 
                })}
            </ul>
        </main>
    )
}

export default ArticlesPanel;