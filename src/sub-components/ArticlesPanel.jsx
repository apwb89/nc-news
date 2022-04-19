import getArticles from '../utils/api';
import { useState, useEffect } from 'react';

const ArticlesPanel = () => {
    const [ articles, setArticles ] = useState([]);

    useEffect(() => {
        getArticles().then((response) => {
            setArticles(response)
        })
    }, [setArticles])

    return <p>Articles Panel</p>
}

export default ArticlesPanel;