import NewTopicForm from '../sub-components/NewTopicForm';
import { Link } from 'react-router-dom';


const Topics = ({topics, setTopics}) => {
   
    return (
        <>
        <h1>Topics</h1>
        <ul>
            {topics.map(topic => {
                return (
                        <li key={topic.slug}>
                            <Link to={`/articles?topic=${topic.slug}`}><h2>{topic.slug}</h2></Link>
                            <h4>{topic.description}</h4>
                        </li>
                )
            })}
        </ul>
        <NewTopicForm setTopics={setTopics}/>
        </>
    )
}

export default Topics;