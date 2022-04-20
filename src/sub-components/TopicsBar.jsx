import { Button } from '@mui/material';
import { Link } from 'react-router-dom'

const TopicsBar = ({topics, setTopics}) => {
 
    return (
        <>
        <p>Topics: </p>
        {topics.map(topic => {
            return (
                <Link key={topic.slug} to={`/articles?topic=${topic.slug}`}>
                     <Button type='text'>{topic.slug}</Button>
                 </Link>
            )
        })}
        </>
    )
}

export default TopicsBar;
