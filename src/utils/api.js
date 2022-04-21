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

export const getArticleById = (article_id) => {
    return newsApi.get(`/articles/${article_id}`)
    .then(({data}) => {
        return data.article;
    })
}

export const getArticleComments = (article_id) => {
    return newsApi.get(`/articles/${article_id}/comments`)
    .then(({data}) => {
        return data.comments;
    })
}

export const postComment = (article_id, postReq) => {
    return newsApi.post(`/articles/${article_id}/comments`, postReq)
    .then(({data}) => {
        return data.comment;
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

export const voteArticle = (vote, article_id) => {
    const voteObj = {inc_votes: vote}
    return newsApi.patch(`/articles/${article_id}`, voteObj)
    .then(({data}) => {
        return data.article;
    })
}

export const deleteComment = (comment_id) => {
    return newsApi.delete(`/comments/${comment_id}`)
    .then(({data}) => {
        return data;
    })
}