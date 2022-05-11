import { useState } from 'react';
import { postTopic } from '../utils/api';

const NewTopicForm = ({setTopics}) => {
    const [ slugInput, setSlugInput ] = useState('');
    const [ descriptionInput, setDescriptionInput ] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault()
        
        const topic = {};
        topic.slug = slugInput;
        topic.description = descriptionInput;

        setTopics((currTopics) => {
            return [...currTopics, topic]
        })

        postTopic(topic).then((response) => {

        })
        setSlugInput('')
        setDescriptionInput('')
    }

    return (
        <>
        <section className="new-topic-form">
        <h2>Create New Topic</h2>
        <form onSubmit={handleSubmit}>
            <label>
                New Topic :
                <input value={slugInput} onChange={(event) => setSlugInput(event.target.value)} required/>
            </label>
            <label>
                Description :
                <input value={descriptionInput} onChange={(event) => setDescriptionInput(event.target.value)} required/>
            </label>
            <button type="submit">Submit</button>
        </form>
        </section>
        </>
    )
}

export default NewTopicForm;