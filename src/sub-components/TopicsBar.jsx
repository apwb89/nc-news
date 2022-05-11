import { Link } from 'react-router-dom'

const TopicsBar = ({topics}) => {
 
    return (
        <>
        <p className="topics-bar-header">Topics </p>
        <section className='topics-bar-button-area'>
        {topics.map(topic => {
            return (
                <Link key={topic.slug} to={`/articles?topic=${topic.slug}`}>
                     <button className='topic-button' type='text'>{topic.slug}</button>
                 </Link>
            )
        })}
        </section>
        </>
    )
}

export default TopicsBar;
