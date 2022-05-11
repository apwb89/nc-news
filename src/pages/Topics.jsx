import NewTopicForm from '../sub-components/NewTopicForm';
import { Link } from 'react-router-dom';


const Topics = ({topics, setTopics}) => {
   
    return (
        <main className='background'>
        <h1>Topics</h1>
        <ul>
            {topics.map(topic => {
                return (
                    <section className='topics-list-element' key={topic.slug}>
                        <li >
                            <Link to={`/articles?topic=${topic.slug}`}><h2>{topic.slug}</h2></Link>
                            <h4>{topic.description}</h4>
                        </li>
                    </section>
                )
            })}
        </ul>
        <NewTopicForm setTopics={setTopics}/>
        </main>
    )
}

export default Topics;