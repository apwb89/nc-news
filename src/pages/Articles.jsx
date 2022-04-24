import ArticlesPanel from '../sub-components/ArticlesPanel';
import NewArticleForm from '../sub-components/NewArticleForm';
import TopicsBar from '../sub-components/TopicsBar';
import { useSearchParams } from 'react-router-dom';


const Articles = ({topics, setTopics}) => {
    const [ searchParams ] = useSearchParams();
    const topicQuery = searchParams.get('topic')

    return (
        <section className='background'>
            <TopicsBar topics={topics}/>
                <NewArticleForm topics={topics}/>
            <h1>{topicQuery} Articles</h1>
            <ArticlesPanel topicQuery={topicQuery}/>
        </section>
    )   
}

export default Articles;