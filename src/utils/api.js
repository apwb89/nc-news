import axios from 'axios';

const newsApi = axios.create({
    baseURL: 'https://guarded-reaches-90042.herokuapp.com/api'
});

export const getArticles = (topicQuery) => {
    return newsApi.get('/articles', {
        params: {
           topic: topicQuery
        },
    }).then(({ data }) => {
        return data.articles;
    })
}

export const getUsers = () => {
    return newsApi.get('/users')
    .then(({ data }) => {
        return data.usernames;
    })
}

export const getTopics = () => {
    return newsApi.get('/topics')
    .then(({ data }) => {
        return data.topics;
    })
}