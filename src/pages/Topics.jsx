import {useState, useEffect } from 'react';
import { getTopics } from '../utils/api';

const Topics = () => {
    const [ topics, setTopics ] = useState([]);

    useEffect(() => {
        getTopics().then((response) => {
            setTopics(response)
        })
    }, [])

    return (
        <>
        <h1>Topics</h1>
        <ul>
            {topics.map(topic => {
                return (
                    <li key={topic.slug}>
                        <h2>{topic.slug}</h2>
                        <h4>{topic.description}</h4>
                    </li>
                )
            })}
        </ul>
        </>
    )
}

export default Topics;