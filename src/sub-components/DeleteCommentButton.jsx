import { useContext } from 'react';
import { UserContext } from '../contexts/User';
import { deleteComment } from '../utils/api';

const DeleteCommentButton = ({username, comment_id, setArticleComments}) => {
    let { user } = useContext(UserContext);

    const handleDeleteComment = () => {
        setArticleComments((currComments) => {
            let copyComments = [...currComments];
            return copyComments.filter(comment => comment.comment_id !== comment_id)
        })

        deleteComment(comment_id).then((response) => {

        })
    }

    if (user !== username) {
        return null;
    } 
    return (
        <button onClick={handleDeleteComment}>Delete Comment</button>
    )
}

export default DeleteCommentButton;