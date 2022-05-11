import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/User';
import ExpandNewArticleForm from '../sub-components/ExpandNewArticleForm';
import { getTopics, postArticle } from '../utils/api';

const NewArticleForm = () => {
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    const [ topics, setTopics ] = useState([]);

    const [ titleInput, setTitleInput ] = useState('');
    const [ bodyInput, setBodyInput ] = useState('');
    const [ topicInput, setTopicInput ] = useState('');

    useEffect(() => {
        getTopics().then((response) => {
            setTopics(response)
        })
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();

        const newArticle = {};
        newArticle.author = user;
        newArticle.title = titleInput;
        newArticle.body = bodyInput;
        newArticle.topic = topicInput;

        console.log(newArticle, 'newArticle')
        postArticle(newArticle).then((response) => {
            setTitleInput('');
            setBodyInput('');
            setTopicInput('');

            navigate('/dashboard')
        })
    }
    
    if (!user) {
        return <button className="log-in-to-write-article-button" type="contained" onClick={() => navigate('/login')}>Login to write new article</button>
    }

    return (
        <>
        <ExpandNewArticleForm>
            <h4>Post New Article</h4>
            <h5>Posting as {user}</h5>
            <form onSubmit={handleSubmit}>
                <label>
                    Title: 
                    <input value={titleInput} onChange={(event) => setTitleInput(event.target.value)} required />
                </label>
                <label>
                    Body: 
                    <input value={bodyInput} onChange={(event) => setBodyInput(event.target.value)} required />
                </label>
                <label>
                    Topic:
                    <select value={topicInput} onChange={(event) => setTopicInput(event.target.value)} required>
                        {topics.map(topic => {
                            return <option selected key={topic.slug} value={topic.slug}>{topic.slug}</option>
                        })}
                        <option  value='' selected disabled>-- Select A Topic --</option>
                    </select>
                </label>
                <button type="submit">Submit</button>
            </form>
        </ExpandNewArticleForm>
        </>
    )
}

export default NewArticleForm;