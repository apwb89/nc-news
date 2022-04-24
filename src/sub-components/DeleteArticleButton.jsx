import { useContext } from 'react';
import { UserContext } from '../contexts/User';
import { deleteArticleById } from '../utils/api';

const DeleteArticleButton  = ({ author, article_id, setArticles }) => {
    let { user } = useContext(UserContext);

    const handleDeleteArticle = () => {
        setArticles((currArticles) => {
            let copyArticles = [...currArticles];
            return copyArticles.filter(article => article.article_id !== article_id)
        })

        deleteArticleById(article_id).then((response) => {
            
        })
    }

    if (author !== user) return null;

    return (
        <button onClick={handleDeleteArticle}>Delete Article</button>
    )
}

export default DeleteArticleButton;