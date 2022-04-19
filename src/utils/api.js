import axios from 'axios';

const newsApi = axios.create({
    baseURL: 'https://guarded-reaches-90042.herokuapp.com/api'
});

export const getArticles = () => {

    return newsApi.get('/articles', {
        params: {
           
        },
    }).then(({ data }) => {
        return data.articles;
    })
}