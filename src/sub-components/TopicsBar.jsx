import { Link } from 'react-router-dom'

const TopicsBar = ({topics, setTopics}) => {
 
    return (
        <>
        <p>Topics: </p>
        {topics.map(topic => {
            return (
                <Link key={topic.slug} to={`/articles?topic=${topic.slug}`}>
                     <button type='text'>{topic.slug}</button>
                 </Link>
            )
        })}
        </>
    )
}

export default TopicsBar;
