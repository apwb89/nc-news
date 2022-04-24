import { useContext } from 'react';
import { UserContext } from '../contexts/User';
import Expandable from './Expandable';

const NewArticleForm = ({article_id}) => {
    const { user, setUser } = useContext(UserContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        return;
    }
    
    // if user +++++++++++++++++++++++++++++++++++++

    return (
        <>
            <h4>Post New Article</h4>
            <Expandable>
                <form className='comment-form' onSubmit={handleSubmit}>
                    <label></label>
                </form>
            </Expandable>
        </>
    )
}

export default NewArticleForm;