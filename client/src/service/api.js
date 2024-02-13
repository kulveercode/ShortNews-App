import axios from 'axios';

// const URL = 'http://localhost:8000';

const URL = 'https://newsapp-w2fy.onrender.com';


export const getNews = async (page, size = 5) => {
    try {
        return await axios.get(`${URL}/news?page=${page}&size=${size}`);
    } catch (error) {
        console.log('error while calling getNews API');
    }
}